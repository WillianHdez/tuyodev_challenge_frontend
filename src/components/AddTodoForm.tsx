import { useState } from 'react'
import { type TodoTitle } from '../types/types'

interface Props {
  saveTodo: (title: TodoTitle) => void
}

export const AddTodoForm: React.FC<Props> = ({ saveTodo }) => {
  const [inputValue, setInputValue] = useState('')

  const handleSumit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
    saveTodo({ title: inputValue })
    setInputValue('')
  }
  return (
    <form onSubmit={handleSumit}>
      <input
        className="new-todo"
        value={inputValue}
        onChange={(event) => { setInputValue(event.target.value) }}
        onKeyDown={() => {}}
        placeholder='¿Que quieres hacer?'
        autoFocus
      />
    </form>
  )
}
