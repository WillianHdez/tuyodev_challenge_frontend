import { type TodoTitle } from '../types/types'
import { AddTodoForm } from './AddTodoForm'

interface Props {
  onAddTodo: (title: TodoTitle) => void
}

export const Header: React.FC<Props> = ({ onAddTodo }) => {
  return (
    <header className="header">
      <h1>ToDo App</h1>
      <AddTodoForm saveTodo={onAddTodo} />
    </header>
  )
}
