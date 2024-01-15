import { useState } from 'react'
import { type TodoId, type TodoItem as TodoType } from '../types/types'
import { getCreationDate } from '../utils'

interface Props extends TodoType {
  onToggleCompleteTodo: ({ id, completed }: Pick<TodoType, 'id' | 'completed' >) => void
  onRemoveTodo: ({ id }: TodoId) => void
}
export const TodoItem: React.FC<Props> = ({ id, title, completed, createdAt, completedAt, onRemoveTodo, onToggleCompleteTodo }) => {
  const [item, setItem] = useState(completedAt)
  const handleChangeCheckbox = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const isChecked = event.target.checked
    const newCompletedAt = isChecked ? new Date() : null
    onToggleCompleteTodo({
      id,
      completed: isChecked
    })
    setItem(newCompletedAt)
  }

  return (
    <div className="view">
      <input
        className="toggle"
        type="checkbox"
        checked={completed}
        onChange={ handleChangeCheckbox }
      />
      <label>{title}<br/>
      <p className='text-small'>Fecha de creación: {getCreationDate({ id, title, completed, createdAt, completedAt }).toLocaleDateString()}</p>
        {completed ? <p>Fecha de finalización: {item.toLocaleDateString()}</p> : <p>No finalizado</p> }
      </label>
        <button
        className="destroy"
        onClick={() => {
          onRemoveTodo({ id })
        }}
      />
    </div>
  )
}
