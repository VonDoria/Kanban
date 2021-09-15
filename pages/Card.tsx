import { useEffect } from "react";
import { CardContainer } from "../styles/Card";

export default function Card({ cardId }: { cardId: string }){

    useEffect(() => {
        dragElement();
    }, [])

    function dragElement() {
        var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
        const element = document.getElementById(cardId);
        const header = document.getElementById(`${cardId}header`);
        if(header){
           header.onmousedown = dragMouseDown;
        }else if(element) {
            element.onmousedown = dragMouseDown;
        }

        function dragMouseDown(e: MouseEvent) {
            e = e || window.event;
            e.preventDefault();
            pos3 = e.clientX;
            pos4 = e.clientY;
            document.onmouseup = closeDragElement;
            document.onmousemove = elementDrag;
        }

        function elementDrag(e: MouseEvent) {
            e = e || window.event;
            e.preventDefault();
            pos1 = pos3 - e.clientX;
            pos2 = pos4 - e.clientY;
            pos3 = e.clientX;
            pos4 = e.clientY;
            if(element){
                element.style.top = (element.offsetTop - pos2) + "px";
                element.style.left = (element.offsetLeft - pos1) + "px";
            }
        }

        function closeDragElement() {
            document.onmouseup = null;
            document.onmousemove = null;
        }
    }

    function change(element: any){
        console.log(element.style.left)
    }

    return(
        <CardContainer onMouseUp={(event) => change(event.target)} id={`${cardId}`}>
            <input className="title" />
            <textarea></textarea>
            <div id={`${cardId}header`}></div>
        </CardContainer>
    )
}