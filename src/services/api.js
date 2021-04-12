import axios from "axios";

export const saluteAPI = axios.create({
	baseURL: "https://capstonegrupo4.herokuapp.com",
});

export const diseaseAPI = axios.create({
	baseURL: "https://cid.api.mokasoft.org/cid10"
})
