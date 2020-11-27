import React, {useContext} from 'react';
import {DataContext} from '../App';


export default function LeftPanelButtons(props) {

    const data = useContext(DataContext);
    let iData = data[2].counters[0].i;
    let lineCounterData = data[2].counters[2].lineCounter; 

    function deskColorChange () {
        const boardColors = data[1].colorBoard;
        if (iData < (boardColors.length-1)) {
            iData++; }
        else {
            iData = 0;
        }
        document.getElementsByClassName("theBoard")[0].style.backgroundColor = boardColors[iData];
    }

    function textColorChange() {
        const textColors = data[0].colorText;
        let stringAmount = document.getElementsByClassName("listArea")[0].children.length;
        if (iData < (textColors.length-1)) {
            iData++;
        }
        else {
            iData = 0;
        }
        for (let a = 0; a < stringAmount; a++) {
            document.getElementsByClassName("textColor")[a].style.color = textColors[iData];
        }
    }

    function addLine (setTodos, todos) {
        setTodos = props.setTodos;
        todos = props.todos;
        
        //lineCounterData = lineCounterData + 1;
        //data[2].counters[2].lineCounter = lineCounterData;
        data[2].counters[2].lineCounter = data[2].counters[2].lineCounter + 1;
        setTodos (
          todos.concat([{
            id: (props.todos.length + 1),
            completed: false,
            title: ''
        }])
        )
        console.log(" and LineCOunter: ", data[2].counters[2].lineCounter)
      }

    return (  
        <div className="elButtonsForEdit">
            <div className="button newBoardButton" onClick={() => alert('It is a new board!')}>
                <h4>New Board</h4>
            </div>
            <div className="button addLineButton" onClick={addLine}>
                <h4>Add Line</h4>
            </div>
            <div className="button addListButton" onClick={() => alert('It is Add List Button!')}>
                <h4>Add List</h4>
            </div>
            <div className="button textColorButton" onClick={textColorChange}>
                <h4>Text Color</h4>
            </div>
            <div className="button deskColorButton" onClick={deskColorChange}>
                <h4>Desk Color</h4>
            </div>
        </div>            
    )
}