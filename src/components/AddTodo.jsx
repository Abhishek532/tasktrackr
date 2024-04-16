import { useContext, useState } from "react"
import { ThemeContext } from '../App'
import { v4 as uuidv4 } from 'uuid';

export default function AddTodo() {

  const [input, setInput] = useState("")

  // eslint-disable-next-line no-unused-vars
  const {todos, setTodos} = useContext(ThemeContext);
 
  function handleSubmit(e) {
    e.preventDefault();
    if (input.length>=1){

      // Another Method
      // const newList = todos.concat({id: uuidv4(), name: input, completed: false })
      // setTodos(newList)

      setTodos(prevTodos => [
        ...prevTodos,
        {
          id: uuidv4(),
          name: input,
          completed: false
        },
      ])
    }
    setInput("")
  }

  return (
    <>
      <form className="flex mt-8" onSubmit={handleSubmit}>

      <input 
        className="border border-gray-400 hover:border-gray-600 w-full rounded-s-md p-2 text-black font-semibold" 
        type="text"
        placeholder="Add a new task"
        value={input}
        onChange={(e)=>setInput(e.target.value)} 
      />

      <button 
        type= "submit"
        className= "border rounded-e-md p-2 border-neutral-700  bg-neutral-700 hover:border-neutral-600 hover:bg-neutral-600 font-semibold"
      >
        Add
      </button>
      </form>
    </>
  )
}