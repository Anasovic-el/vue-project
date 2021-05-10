const ADD_NEW_CLIENT = (state,client)=>{
    state.clients.push(client)
}
const CLIENT_INFO = (state,individualClient) => {
    state.individualClient = individualClient
}

export default {
    ADD_NEW_CLIENT, CLIENT_INFO
}
