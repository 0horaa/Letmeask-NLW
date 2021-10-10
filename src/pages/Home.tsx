import {FormEvent, useState} from "react";
import {useAuth} from "../hooks/useAuth";
import {useHistory} from "react-router-dom";

import {database} from "../services/firebase";

import illustrationImg from "../assets/images/illustration.svg";
import logoImg from "../assets/images/logo.svg"
import googleIconImg from "../assets/images/google-icon.svg";

import {Button} from "../components/Button";

import "../styles/auth.scss";


//o & no HTML é usado para criar símbolos, então para fazê-lo funcionar, basta colocar "&amp;"

export function Home(){
    const history = useHistory();
    const {user, signInWithGoogle} = useAuth(); 
    const [roomCode, setRoomCode] = useState("");

    async function handleCreateRoom(){
        if(!user){ //se o usuário não estiver logado, faça o sign in
            await signInWithGoogle();
        }

        history.push("/rooms/new"); //redireciona pra /rooms/new
    }

    async function handleJoinRoom(event : FormEvent){
        event.preventDefault();

        if(roomCode.trim() === ""){
            return;
        }

        try{
            const roomRef = await database.ref(`rooms/${roomCode}`).get();
            //acima busca dentro de "rooms/id_da_sala" e tenta pegar os dados da mesma

            if(!roomRef.exists()){ //se essa sala NÃO existir
                alert("Sala inexistente. Verifique se o código está correto e tente novamente.");
                return; //o return interrompe a execução, então não executa mais nada caso a sala não exista
            }

            if(roomRef.val().endedAt){
                alert("Essa sala já foi encerrada");
                return;
            }

            history.push(`/rooms/${roomCode}`);
        }catch(e){
            return;
        }
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
                    <button onClick={handleCreateRoom} className="create-room">
                        <img src={googleIconImg} alt="Logo do Google" />
                        Crie sua sala com o Google
                    </button>
                    <div className="separator">ou entre em uma sala</div>
                    <form onSubmit={handleJoinRoom}>
                        <input
                            type="text"
                            placeholder="Digite o código da sala"
                            onChange={event => setRoomCode(event.target.value)}
                            value={roomCode} 
                        />
                        <Button type="submit">
                            Entrar na sala
                        </Button>
                    </form>
                </div>
            </main>
        </div>
    )
}