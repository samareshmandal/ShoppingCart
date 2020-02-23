import axios from "axios";

const instance = axios.create({
	baseURL: "https://api.myjson.com/bins/qzuzi"
});

export default instance;
