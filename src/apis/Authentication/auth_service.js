import axios from "axios";
import {authenticationApiEndpoints as endpoint}  from './auth_endpoints'

export const loginApi = async (payload) => {
    const config = {method:"post",url:endpoint.loginEndpoint,data:payload}
    try{
        const response = await axios(config)
        return response;
    }
    catch(err){
        throw err
    }
}