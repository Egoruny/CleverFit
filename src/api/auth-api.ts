import axios from "axios";
import { URL } from "@utils/constans/url";
import { AuthDataType } from "@utils/constans/type";

const instance = axios.create({
    baseURL: URL,
})


export const authApi = {
    auth(data:AuthDataType) {
        return instance.post('/auth/login',data)
    },
    registration(data:AuthDataType) {
        return instance.post('/auth/registration',data)
    }
}