import { useState } from 'react'
import Todo from './components/Todos'
import AddTodo from './components/addTodo'
// import AddTodo from './components/AddTodo'

function App() {
  
  return (
  <>
  <div >
    <h1 className='w-full max-w-xl mx-auto mt-8 grid justify-center'>Redux Toolkit</h1>
    <AddTodo />
    <Todo />

  </div>
    
  </>
  )
}

export default App
