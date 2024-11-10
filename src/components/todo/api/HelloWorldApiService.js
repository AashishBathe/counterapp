import {apiClient} from './ApiClient.js'

export const retrieveHelloWorldBean = 
() => apiClient.get('/hello-world-bean')

export const retrievePathHelloWorldBean = 
(username, token) => apiClient.get(`/hello-world/path-variable/${username}`)
