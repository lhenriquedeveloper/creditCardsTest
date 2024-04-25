import axios from "axios";

const viaCep = axios.create({
  baseURL: "http://viacep.com.br/ws/",
});

export default viaCep;
