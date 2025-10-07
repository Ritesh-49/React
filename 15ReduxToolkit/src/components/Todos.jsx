import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo, editTodo } from '../features/todo/todoSlice'

const Todos = () => {
  const [editId, setEditId] = useState(null)
  const [editValue, setEditValue] = useState('')
  const todos = useSelector(state => state.todos)
  const dispatch = useDispatch();

  const startEdit = (todo) => {
    setEditId(todo.id)
    setEditValue(todo.text)
  }

  const saveEdit = (id) => {
    if (editValue.trim() !== "") {
      dispatch(editTodo({ id, text: editValue }))
      setEditId(null)
      setEditValue('')
    }
  }

  return (
    <div className="w-full max-w-xl mx-auto mt-8">
      <h2 className="text-2xl font-bold text-center text-white mb-4">Todos</h2>
      <ul className="list-none space-y-3">
        {todos.map((todo) => (
          <li
            className="flex flex-col sm:flex-row justify-between items-center bg-zinc-800 px-4 py-3 rounded gap-2"
            key={todo.id}
          >
            {editId === todo.id ? (
              <>
                <input
                  value={editValue}
                  onChange={e => setEditValue(e.target.value)}
                  className="flex-1 rounded px-2 py-1"
                />
                <button
                  onClick={() => saveEdit(todo.id)}
                  className="bg-green-500 text-white px-3 py-1 rounded"
                >
                  Save
                </button>
                <button
                  onClick={() => setEditId(null)}
                  className="bg-gray-500 text-white px-3 py-1 rounded"
                >
                  Cancel
                </button>
              </>
            ) : (
              <>
                <div className='text-white text-lg break-words w-full'>{todo.text}</div>
                <button
                  onClick={() => startEdit(todo)}
                  className="bg-[#F5F5F5] border-0 py-2 px-4 focus:outline-none hover:bg-red-300 rounded w-full sm:w-auto flex justify-center items-center"
                >
                  <span className="ml-2 sm:ml-0">Edit</span>
                </button>
                <button
                  onClick={() => dispatch(removeTodo(todo.id))}
                  className="text-white bg-red-500 border-0 py-2 px-4 focus:outline-none hover:bg-red-600 rounded w-full sm:w-auto flex justify-center items-center"
                >
                  <span className="ml-2 sm:ml-0">Delete</span>
                </button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Todos  