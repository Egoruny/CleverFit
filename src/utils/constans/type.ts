export type AuthDataType = {
    confirmPassword:any
    password: any
    email: any
    location:any
    isRemember:boolean
}

export type AuthType = {
    jwt:any
    isLogged: boolean
    error: any
    checkBox:boolean
    user:any
}


declare const ValidateStatuses: ["success", "warning", "error", "validating", ""];
export type ValidateStatus = typeof ValidateStatuses[number];