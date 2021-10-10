import firebase from "firebase/compat/app"; //importa o objeto geral do FireBase

import "firebase/compat/auth";
import "firebase/compat/database";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY, //variáveis de ambiente, o REACT_APP na frente dos nomes é obrigatório no caso do create react-app
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID
};

firebase.initializeApp(firebaseConfig); //inicializa a aplicação FireBase com os meus dados

const auth = firebase.auth();
const database = firebase.database();

export{firebase, auth, database}