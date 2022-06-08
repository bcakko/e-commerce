import { useEffect, useState, useRef, ChangeEvent, MouseEvent } from 'react';
import axios from 'axios';

export default function AuthPage() {

    let [auth, setAuth] = useState({
        login: true,
        register: false
    })

    let [userInputs, setUserInputs] = useState({
        username: "",
        password: "",
        confirmPassword: ""
    })

    const messageRef = useRef<HTMLSpanElement>(null);

    const changeAuth = (event: MouseEvent<HTMLSpanElement>): void => {
        if(auth.login) {
            messageHandler(null)
            setAuth({login: false, register: true})
        }
        if(auth.register) {
            messageHandler(null)
            setAuth({login: true, register: false})
        }
    }

    const onInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
        const {target} = event
        const inputType = (target as Element).getAttribute("data-type");
        if(inputType === "setUsername") {
            let inputString = String(event.target.value);
            setUserInputs({...userInputs, username: inputString});
        } else if(inputType === "setPassword"){
            let inputString = String(event.target.value);
            setUserInputs({...userInputs, password: inputString});
        } else if(inputType === "setConfirmPassword"){
            let inputString = String(event.target.value);
            setUserInputs({...userInputs, confirmPassword: inputString})
        }
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
            .then((response:any) => {
                console.log(response.data)
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
            .then((response:any) => {
                console.log(response)
                messageHandler(null)
                setAuth({login: true, register: false})
                localStorage.setItem("token", response.data.token)
                localStorage.setItem("id", response.data.user._id)
                localStorage.setItem("username", response.data.user.username)

            })
            .catch((error:any) => {
                console.log(error)
                messageHandler(error.response.data.message);
            })
    }

    function onSubmit(e: MouseEvent<Element>) {
        
        e.preventDefault();
        if(auth.login){
            if(userInputs.username.length && userInputs.password.length >= 4){
                loginUser();
            }else{
                messageHandler("inputs are weak")
                console.log("inputs are weak")
            }
        }else if(auth.register){
            if(userInputs.username.length && userInputs.password.length && userInputs.confirmPassword.length >= 4){
                if(userInputs.password === userInputs.confirmPassword){
                    registerUser();
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
    className="xs:w-full xs:h-[65vh] xs:mt-7 xs:flex xs:justify-center xs:items-center bg-gradient-to-b from-main-color to-side-color text-header-main-color">
    <div className={`${auth.login ? "xs:h-1/4" : "xs:h-1/3"} xs:w-[70%] sm:w-2/5 lg:w-1/4 xl:w-[25%] absolute xs:flex xs:flex-col items-center justify-around shadow-lg p-5 transition-all ease-in`}>
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
                <span onClick={changeAuth} className="xs:text-sm xs:opacity-75">{auth.register ? "LOGIN" : "REGISTER"}</span>
            </div>
        </div>
    </div>
</div>
)
}