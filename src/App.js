import React, {useEffect} from 'react';
import LeftPanelButtons from './TheFridge/LeftPanelButtons';
import RightPanelBoard from './TheFridge/RightPanelBoard';


export const DataContext = React.createContext();

function App() {
  const [todos, setTodos] = React.useState ([])

  // useEffect( () => {
  //   fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
  //     .then(response => response.json())
  //     .then(todos => {
  //       setTodos(todos)
  //       console.log(todos)
  //     })
  // }, [])

  const [data, setData] = React.useState ([
    { colorText: ["black", "greenyellow", "blue", "yellow", "darkgrey", "aliceblue", "red", "orchid"] },
    { colorBoard: ["black", "greenyellow", "cornflowerblue", "yellow", "darkgrey", "aliceblue", "red", "pink", "rebeccapurple"] },
    { counters: [
      {i: 0},
      {a: 1},
      {lineCounter: 0},
      {lineCounterAttr: 0}
    ]} 
  ])
  
  return (
    <DataContext.Provider value={data}>
      <div>
      <h2>Create your TODO or any list you need</h2>
        <div className="elOnBoardEditPage">
          <LeftPanelButtons todos={todos} setTodos={setTodos}></LeftPanelButtons>
          <RightPanelBoard todos={todos} setTodos={setTodos}></RightPanelBoard>
        </div>
      </div>
    </DataContext.Provider>
  )
 
}

export default App;
