import { type TodoItem as TodoType, type TodoId, type ListOfTodos } from '../types/types'
import { getCreationDate } from '../utils'
import { TodoItem } from './TodoItem'

interface Props {
  todos: ListOfTodos
  onToggleCompleteTodo: ({ id, completed }: Pick<TodoType, 'id' | 'completed'>) => void
  onRemoveTodo: ({ id }: TodoId) => void
}

export const TodoList: React.FC<Props> = ({ todos, onRemoveTodo, onToggleCompleteTodo }) => {
  return (
    <ul className='todo-list'>
      {todos.map((todo) => (
        <li key={todo.id}
        className={`${todo.completed ? 'completed' : ''}`}>
          <TodoItem
            key={todo.id}
            id={todo.id}
            title={todo.title}
            completed={todo.completed}
            onToggleCompleteTodo={onToggleCompleteTodo}
            onRemoveTodo={onRemoveTodo}
            createdAt={getCreationDate(todo)}
            completedAt={todo.completedAt}
          />
        </li>
      ))}
    </ul>
  )
}
