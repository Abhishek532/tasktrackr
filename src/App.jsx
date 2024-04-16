import { createContext, useEffect, useState } from 'react'

import Header from './components/Header'
import AddTodo from './components/AddTodo'
import TodoItems from './components/TodoItems'

export const ThemeContext = createContext();

function App() {
  
  const [todos, setTodos] = useState(() => {
    const localTodos = JSON.parse(localStorage.getItem("todos"))
    return localTodos || []
  })

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
    }, [todos])

  return (
    <> 
      <div className="p-8 pt-6 sm:border sm:rounded-md sm:border-neutral-800 sm:max-w-4xl sm:mx-auto sm:p-16 sm:pt-12 sm:bg-neutral-800 text-white h-full">
        <h1 className="text-4xl mb-8 sm:text-8xl sm:mb-16 text-center font-bold italic underline decoration-2 sm:decoration-4 underline-offset-8">TaskTrackr</h1>
        <Header />

        <ThemeContext.Provider value={{todos, setTodos}}>
          <AddTodo />
          <TodoItems />
        </ThemeContext.Provider>

      </div>
    </>
  )
}

export default App