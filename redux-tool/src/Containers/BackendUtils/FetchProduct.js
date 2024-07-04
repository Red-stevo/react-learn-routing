import axios from "axios";

export const FetchProduct = async (url) => {
    return axios.get(url);
}