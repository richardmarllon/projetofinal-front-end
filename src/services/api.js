import axios from "axios";

export const saluteAPI = axios.create({
	baseURL: "https://capstonegrupo4.herokuapp.com/",
});
