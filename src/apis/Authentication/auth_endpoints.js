import { baseUrl } from "../baseUrl"

export const authenticationApiEndpoints = {
    loginEndpoint : () => {
        return `${baseUrl}/customer/customerLogin`
    }
}