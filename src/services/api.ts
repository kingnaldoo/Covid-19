import axios from 'axios';

export const api = axios.create({
	baseURL: 'https://desafio-insightlab.herokuapp.com/api'
})
