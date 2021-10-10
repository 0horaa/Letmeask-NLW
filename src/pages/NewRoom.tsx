import {FormEvent, useState} from "react";
import {useAuth} from "../hooks/useAuth";
import {Link, useHistory} from "react-router-dom";
//o Link é um componente do react-router-dom que serve pra fazer redirecionamentos

import {database} from "../services/firebase";

import illustrationImg from "../assets/images/illustration.svg";
import logoImg from "../assets/images/logo.svg"

import {Button} from "../components/Button";

import "../styles/auth.scss";

//o & no HTML é usado para criar símbolos, então para fazê-lo functionar, basta colocar "&amp;"

export function NewRoom(){
    const {user} = useAuth();
    const history = useHistory();
    const [newRoom, setNewRoom] = useState("");

    async function handleCreateRoom(event : FormEvent){
        event.preventDefault();

        if(newRoom.trim() === ""){
            return;
        }

        const roomRef = database.ref("rooms"); //cria uma referencia (categoria) dentro do banco onde várias informações podem ser salvas
        
        const firebaseRoom = await roomRef.push({ //usa o push como método pra criar um novo registro dentro de roomRef
            title:newRoom,
            authorId:user?.id, //o ponto de interrogação serve pra que ele não seja considerado caso seja undefined 
        });
        
        history.push(`/rooms/${firebaseRoom.key}`); //ou seja, rooms/id_unico do firebase
    }

    return(
        <div id="page-auth">
            <aside>
                <img src={illustrationImg} alt="Ilustração simbolizando perguntas e respostas" />
                <strong>Crie salas de Q&amp;A ao-vivo</strong>
                <p>Tire as dúvidas da sua audiência em tempo real</p>
            </aside>
            <main>
                <div className="main-content">
                    <img src={logoImg} alt="Letmeask" />
                    <h2>Criar uma nova sala</h2>
                    <form onSubmit={handleCreateRoom}>
                        <input
                            type="text"
                            placeholder="Nome da sala"
                            onChange={event => setNewRoom(event.target.value)
                            /*acima basicamente ele acessa o evento de mudança do input, e atualiza
                            o estado acessando o evento de change, depois a tag target e por fim
                            o seu atributo value (*/
                            }
                            value={newRoom} 
                        />
                        <Button type="submit">
                            Criar sala
                        </Button>
                    </form>
                    <p>
                        Quer entrar em uma sala existente? <Link to="/">Clique aqui</Link>
                    </p>
                </div>
            </main>
        </div>
    )
}