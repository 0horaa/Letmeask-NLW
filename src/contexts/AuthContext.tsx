import {createContext, useState, useEffect, ReactNode} from "react";
import {auth, firebase} from "../services/firebase";

type User = {
    id:string;
    name:string;
    avatar:string;
}
  
type AuthContextType = {
    user:User | undefined;
    signInWithGoogle:() => Promise<void>; //a função é tratata como Promise já que é assíncrona
}

type AuthContextProviderProps = {
    children:ReactNode;
}

export const AuthContext = createContext({} as AuthContextType);

export function AuthContextProvider(props : AuthContextProviderProps){
    const [user, setUser] = useState<User>(); //inicializado como undefined

    useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged(user => { //esse é um event listener do firebase que verifica se o usuário já se logou
        if(user){ //se houver um usuário já logado salvo pelo firebase, então ele atualiza o State novamente
          const {displayName, photoURL, uid} = user;
  
          if(!displayName || !photoURL){
            throw new Error("Missing information from Google Account");
          }
  
          setUser({
            id:uid,
            name:displayName,
            avatar:photoURL
          });
        }
      });
  
      return () => {
        unsubscribe(); //esse retorno serve pra interromper o event listener depois que ele for usado uma vez
      }
    }, []);
  
    async function signInWithGoogle(){
      const provider = new firebase.auth.GoogleAuthProvider(); //cria um objeto de autenticação com Google
  
      const result = await auth.signInWithPopup(provider);
  
      if(result.user){
        const {displayName, photoURL, uid} = result.user;
  
        if(!displayName || !photoURL){
          throw new Error("Missing information from Google Account");
        }
  
        setUser({
          id:uid,
          name:displayName,
          avatar:photoURL
        });
      }
    }

    return(
        <AuthContext.Provider value={{user, signInWithGoogle}}>
            {props.children}
        </AuthContext.Provider>
    );
}