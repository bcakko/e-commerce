import { useEffect, useState, useRef, ChangeEvent, MouseEvent } from 'react';
import axios from 'axios';
import { IAuthRegisterResponseType, IAuthLoginResponseType, IAuthLoginErrorType } from '../types/Auth.types';
import { useNavigate } from 'react-router-dom';
// Redux
import { useDispatch } from 'react-redux';
import { logUserInAction } from '../redux/actions/userActions';
import { showNotifier } from '../redux/actions/notifierActions';
export default function AuthPage() {

    const [auth, setAuth] = useState({
        login: true,
        register: false
    })

    const [userInputs, setUserInputs] = useState({
        username: "",
        password: "",
        confirmPassword: ""
    })

    const messageRef = useRef<HTMLSpanElement>(null);
    const dispatch = useDispatch();
    // Routing
    const navigate = useNavigate();
    const routeChange = () => {
    let path : string = `/`;
        navigate(path);
    }

    const changeAuth = (event: MouseEvent<HTMLSpanElement>): void => {
        messageHandler(null)
        setAuth({login: auth.login, register: !auth.login})

        // if(auth.login) {
        //     setAuth({login: false, register: true})
        // }
        // if(auth.register) {
        //     setAuth({login: true, register: false})
        // }
    }

    const onInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
        const {target} = event
        const inputType = (target as Element).getAttribute("data-type");

        let inputString = String(event.target.value);
        setUserInputs({...userInputs, [inputType!]: inputString});

        // if(inputType === "setUsername") {
        //     setUserInputs({...userInputs, username: inputString});
        // } else if(inputType === "setPassword"){
        //     setUserInputs({...userInputs, password: inputString});
        // } else if(inputType === "setConfirmPassword"){
        //     setUserInputs({...userInputs, confirmPassword: inputString})
        // }
    }

    function messageHandler(error:any){
        if(messageRef.current && error) {
            messageRef.current.innerHTML = ""
            messageRef.current.className = `xs:text-xs sm:text-sm block font-bold animate-pulse opacity-75 mt-2`;
            messageRef.current.innerHTML = error;
        } else if(messageRef.current){
            messageRef.current.className = `hidden transition-all ease-in`;
            messageRef.current.innerHTML = ""
        }
    }

    function registerUser(){
        axios.post("http://localhost:4000/api/registerUser", {
            username: userInputs.username,
            password: userInputs.password
        })
            .then((response:IAuthRegisterResponseType) => {
                messageHandler(null)
                loginUser();
            })
            .catch((error:any) => {
                console.log(error)
                messageHandler(error.response.data.message)
            })
    }

    function loginUser(){
        axios.post("http://localhost:4000/api/login", {
            username: userInputs.username,
            password: userInputs.password
        })
            .then((response:IAuthLoginResponseType) => {
                messageHandler(null)
                setAuth({login: true, register: false})
                const localData = {
                    "token": response.data.token,
                    "id": response.data.user._id,
                    "username": response.data.user.username
                }

                localStorage.setItem("user", JSON.stringify(localData))
                if(response)dispatch(logUserInAction(response.data.user._id))
                dispatch(showNotifier("Auth is successful"))
            })
            .catch((error:IAuthLoginErrorType) => {
                console.log(error)
                messageHandler(error.response.data.message);
                dispatch(showNotifier(error.response.data.message))
                
            })
    }

    function onSubmit(e: MouseEvent<Element>) {
        
        e.preventDefault();
        if(auth.login){
            if(userInputs.username.length && userInputs.password.length >= 4){
                loginUser();
                routeChange();
                
            }else{
                messageHandler("inputs are weak")
            }
        }else if(auth.register){
            if(userInputs.username.length && userInputs.password.length && userInputs.confirmPassword.length >= 4){
                if(userInputs.password === userInputs.confirmPassword){
                    registerUser();
                    routeChange();
                }else{
                    messageHandler("passwords don't match")
                    console.log("passwords don't match")
                }
            }else{
                messageHandler("inputs are weak")
                console.log("inputs are weak")
            }
        }
    }


return (
<div
    className="xs:w-full xs:h-[65vh] xs:flex xs:justify-center xs:items-center bg-gradient-to-b from-main-color to-side-color text-header-main-color">
    <div className={`${auth.login ? "xs:h-2/4" : "xs:h-[55%]"} xs:w-[70%] sm:w-2/5 lg:w-1/4 xl:w-[25%] absolute xs:flex xs:flex-col items-center justify-around shadow-lg p-5 transition-all ease-in`}>
        <div className="xs:w-full xs:flex xs:flex-col">
            <span className="xs:opacity-75">User name : </span>
            <input type="username" onChange={onInputChange} data-type="setUsername" className="outline-0 p-1 border-b border-side-color" style={ {background: "none" } } placeholder="FakeUser" />
        </div>
        <div className="xs:w-full xs:flex xs:flex-col">
            <span className="xs:opacity-75">Password : </span>
            <input onChange={onInputChange} type="password" data-type="setPassword" className="outline-0 p-1 border-b border-main-color" style={ {background: "none" } } placeholder="youngadessi"/>
        </div>
        {auth.register ?
            <div className="xs:w-full xs:flex xs:flex-col">
                <span className="xs:opacity-75">Confirm Password : </span>
                <input onChange={onInputChange} type="password" data-type="setConfirmPassword" className="outline-0 p-1 border-b border-main-color" style={ {background: "none" } } placeholder="youngadessi"/>
            </div>
        : ""}
        <span ref={messageRef} className="hidden transition-all ease-in"></span>

        <div className="xs:w-full xs:flex xs:flex-col">
            <button onClick={onSubmit} className="xs:w-full p-1 rounded-md bg-main-color hover:bg-secondary-color 0transition-all ease-in">{auth.register ? "REGISTER" : "LOGIN"}</button>
            <div className="xs:w-full xs:flex xs:flex-col xs:items-center xs:mt-2">
                <span className="xs:text-xs sm:text-sm xs:opacity-50">{auth.register ? "Do you have an account?" : "Don't you have an account?"}</span>
                <span onClick={changeAuth} className="xs:text-sm xs:opacity-75 cursor-pointer hover:opacity-100">{auth.register ? "LOGIN" : "REGISTER"}</span>
            </div>
        </div>const
    </div>
</div>
)
}