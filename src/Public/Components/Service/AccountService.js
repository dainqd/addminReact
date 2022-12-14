import { BASE_URL_SERVER } from "../config/server";
import axios from "axios";

const API_ENDPOINT = {
    LOGIN_ACCOUNT: "/api/v1/account/login",
    REGISTER_ACCOUNT: "/api/v1/account/register",
    LIST_ACCOUNT: "/api/v1/account/list",
    DELETE_ACCOUNT: "/api/v1/account/",
    UPDATE_ACCOUNT: "/api/v1/account/",
    DETAIL_ACCOUNT: "/api/v1/account/",
}
class AccountService {

    loginAccount = (data) => {
        return axios.post(BASE_URL_SERVER + API_ENDPOINT.LOGIN_ACCOUNT, data);
    }

    registerAccount = (data) => {
        return axios.post(BASE_URL_SERVER + API_ENDPOINT.REGISTER_ACCOUNT, data);
    }

    listAccount = () => {
        return axios.get(BASE_URL_SERVER + API_ENDPOINT.LIST_ACCOUNT);
    }

    deleteAccount = (id) => {
        return axios.delete(BASE_URL_SERVER + API_ENDPOINT.DELETE_ACCOUNT + id);
    }

    updateAccount = (id, data) => {
        return axios.put(BASE_URL_SERVER + API_ENDPOINT.UPDATE_ACCOUNT + id, data);
    }

    detailAccount = (id) => {
        return axios.get(BASE_URL_SERVER + API_ENDPOINT.DETAIL_ACCOUNT + id)
    }
}
const accountService = new AccountService();
export default accountService;