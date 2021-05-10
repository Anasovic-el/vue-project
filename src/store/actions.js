import axios from "axios";

const createNewClient = (context, client) => {
   return axios
    .post("http://localhost:5000/api/clients/", {
      N_serie: client.serial_number,
      Nom: client.last_name,
      modele: client.model,
      categorie: client.reapir_category,
      eau: client.been_in_water,
      commentaire: client.comment,
    })
    .then((res) => {
      context.commit("ADD_NEW_CLIENT", client);
    })
    .catch((err) => console.log(err.response.data.message));
};

const getAllClients = (context) => {
  axios
    .get("http://localhost:5000/api/clients")
    .then((res) => {
        context.commit("ADD_NEW_CLIENT", res.data);
    })
    .catch((err) => console.log(err));
};

export default {
  createNewClient,getAllClients
};
