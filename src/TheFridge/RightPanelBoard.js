import React, {useContext} from 'react';
import DelButton from './Pics/DeleteButton.jpg';
import {DataContext} from '../App';


const styles = {
    button: {
        border: '2px solid green',
        borderRadius: '5px',
        backgroundColor: 'aliceblue',
        height: '30px',
        marginTop: '10px'
    }
}

function RightPanelBoard (props) {
    let arrOfStrings = document.getElementsByClassName('textColor');
    const data = useContext(DataContext);
    

    function saveLine(key) {
        let todos = props.todos;
        let currenKey = key - 1;
        let newTitle = arrOfStrings[currenKey].value;
        if (newTitle !== todos[currenKey].title) {
        todos[currenKey].title = newTitle;
        }
        //document.getElementsByTagName('button')[0].style.visibility = 'hidden';
    }
    //function handleInputChange
    function removeTodo(key) {
        let todo = props.todos;
        props.setTodos(todo.filter( todo => todo.id !== key ));
        data[2].counters[2].lineCounter = data[2].counters[2].lineCounter - 1;
        console.log(" and LineCOunter: ", data[2].counters[2].lineCounter)
    }

    return (
    <div className="theBoard">
        <div className="listArea">
            { props.todos.map(todo =>    
                <p className="inLine" key={todo.id}>
                    <input type="checkbox"></input>
                    &nbsp;
                    <input 
                        type="text" 
                        className="textColor" 
                        placeholder="_____________________________________________"
                        // onChange={}
                        >
                    </input>
                    <button style={styles.button} onClick={ key => saveLine(todo.id)}>
                            <strong>Save</strong>
                    </button>
                    <button style={styles.button} onClick={ key => removeTodo(todo.id)}><img className="deleteButton" src={DelButton} alt='Del'></img></button>
                </p>)
            }
        </div>
    </div>            
    )
}

export default RightPanelBoard;
//<strong>{todo.id}</strong>
//in input for text also shoud be onkeydown="focusNext(event)" (but it shows warning)