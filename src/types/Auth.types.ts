export interface IAuthRegisterResponseType {
    config: {},
    data: {},
    headers: {},
    request?: {},
    status: number,
    statusText: string
}

export interface IAuthLoginResponseType {
    config: {},
    data: {
        exp: number,
        token: string,
        user: {
            password: string,
            username: string,
            _id: string
        }
    },
    headers: {},
    request?: {},
    status: number,
    statusText: string
}

export interface IAuthLoginErrorType {
    code: string,
    config: {},
    message: string,
    name: string,
    request?: {},
    response: {
        config: {},
        data: {
            message: string
        },
        headers: {},
        request: {},
        status: number,
        statusText: string
    }
}