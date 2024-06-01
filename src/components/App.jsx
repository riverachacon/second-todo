import React, {useState} from "react";

function App() {
  const [list, setList] = useState([])
  const [newItem, setNewItem] = useState("")
  function handleNewItem (event) { // event.target.value
    const {value: newInput} = event.target
    setNewItem(newInput)
  }

  function handleSubmit (event) { // function for user when hitting submit
    setList((prevValue) => [...prevValue, newItem]) // add new user input to array
    setNewItem("")// to clear input
    
    event.preventDefault()
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <form   onSubmit={handleSubmit}>
        <input type="text" onChange={handleNewItem} value={newItem}/>
        <button type="submit">
          <span>Add</span>
        </button>
        </form>
      </div>
      <div>
        <ul>
          {list.map((i, index)=> { // iterate over list items
            return (<li key={index}>{i}</li>)
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
