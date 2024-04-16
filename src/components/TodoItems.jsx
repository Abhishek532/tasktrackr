import { useContext } from "react"
import { ThemeContext } from '../App'
import {Trash2} from "lucide-react"
export default function TodoItems() {

  const {todos, setTodos} = useContext(ThemeContext);


  function handleCheckbox(clickedItem) {
    setTodos(prevTodos => {
      return prevTodos.map((todo) => {
        if (todo.id === clickedItem.id) {
          return {
            ...todo,
            completed: !todo.completed
          }; 
        }
        return todo;
      });
    });
  }

  function handleDelete(clickedItem) {      
    const newList = todos.filter((todo) => todo.id !== clickedItem.id)
    setTodos(newList)
  }

  function deleteAllCompleted(e) {
    e.preventDefault()
    setTodos(prevTodos=> prevTodos.filter((todos) => !todos.completed ))
  }


  return (
    <>
      <div className="text-right mt-12 font-semibold">
        <button 
          type="submit"
          className= "p-1 px-4 border rounded-md bg-red-800 border-red-800 hover:bg-red-700 hover:border-red-700 active:bg-red-900 active:border-red-900 "
          onClick={deleteAllCompleted}>
          Delete all completed
        </button>
      </div>

      <form className="flex flex-col gap-5 mt-6" >
        {todos.map(item => (
          <div key={item.id} className="flex flex-row gap-4">

            <label className={`flex border rounded-md px-4 py-2 font-semibold border-neutral-600 hover:bg-neutral-900 grow cursor-pointer ${item.completed?"bg-neutral-950":""}`}>
              <input 
                type="checkbox" 
                className={`scale-150 ${item.completed? "line-through":""}`} 
                checked={item.completed} 
                onChange={() => handleCheckbox(item)}/>
              <span key={item.id} className={`p-2 pl-4 text-2xl ${item.completed? "line-through":""}`}>{item.name}</span>
            </label>

            <button type="submit" title="Delete task"
              onClick={() => handleDelete(item)}>
              <Trash2 />
            </button>

          </div>
        ))}
        {todos.length===0 && <h1 className="text-center border border-neutral-950 rounded-xl mx-auto w-3/4 sm:w-6/12 py-3 bg-neutral-900 font-extralight">No more todos, well done !</h1>}
      </form>

    </>
  )
} 