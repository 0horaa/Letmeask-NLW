import {useEffect, useState} from "react";
import {useAuth} from "./useAuth";
import {database} from "../services/firebase";

type FirebaseQuestions = Record<string, {
    author:{
        name:string;
        avatar:string;
    }
    content:string;
    isHighlighted:boolean;
    isAnswered:boolean;
    likes: Record<string, {
        authorId:string;
    }>
}> //o record funciona como a chave de um objeto do tipo string

type QuestionType = {
    id:string;
    author:{
        name:string;
        avatar:string;
    }
    content:string;
    isHighlighted:boolean;
    isAnswered:boolean;
    likeCount:number;
    likeId:string | undefined;
}


export function useRoom(roomId : string){
    const {user} = useAuth();
    const [questions, setQuestions] = useState<QuestionType[]>([]);
    const [title, setTitle] = useState("");

    useEffect(() => {
        const roomRef = database.ref(`rooms/${roomId}`);

        roomRef.on("value", room => { //ouve um evento que traz todos os valores, o argumento "value" serve pra buscar valores
            const databaseRoom = room.val(); //pega os valores da sala
            const firebaseQuestions : FirebaseQuestions = databaseRoom.questions ?? {}; //o ?? dizem que se não houver perguntas, ele receberá um objeto vazio
            
            //o entries converte cada linha de objeto na posição de um vetor que tem varios objetos com a chave e o valor
            const parsedQuestions = Object.entries(firebaseQuestions).map(([key, value]) => {
                return{
                    id:key,
                    content:value.content,
                    author:value.author,
                    isHighlighted:value.isHighlighted,
                    isAnswered:value.isAnswered,
                    likeCount:Object.values(value.likes ?? {}).length,
                    likeId:Object.entries(value.likes ?? {}).find(([key, like]) => like.authorId === user?.id)?.[0]
                    //acima, caso haja um like encontrado, ele vai retornar, senão, retornará nulo
                }
            });
            
            setTitle(databaseRoom.title); //título da sala
            setQuestions(parsedQuestions);
        })

        return () => {
            roomRef.off("value"); //desativa o event listener do "on"
        }
    }, [roomId, user?.id]);

    return {questions, title}
}