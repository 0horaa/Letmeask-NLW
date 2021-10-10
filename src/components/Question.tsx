import {ReactNode} from "react";
import classNamesGroups from "classnames";

import "../styles/question.scss";

type QuestionProps = {
    content:string;
    author:{
        name:string;
        avatar:string;
    }
    children?:ReactNode;
    isAnswered?:boolean;
    isHighlighted?:boolean;
}

export function Question({
    content, 
    author, 
    children,
    isAnswered = false,
    isHighlighted = false
} : QuestionProps){
    return(
        <div className={
            classNamesGroups(
                'question', //classe aplicada por padrão
                {answered:isAnswered}, //caso isAnswered seja true, ele aplicará a classe "answered"
                {highlighted:isHighlighted && !isAnswered}
                //caso isHighlighted seja true e isAnswered seja false, ele aplicará a classe "highlighted"
            )
            }>
            <p>{content}</p>
            <footer>
                <div className="user-info">
                    <img src={author.avatar} alt={author.name} />
                    <span>{author.name}</span>
                </div>
                <div>{children}</div>
            </footer>
        </div>
    );
}