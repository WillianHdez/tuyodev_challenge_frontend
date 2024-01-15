import { useState } from 'react'
import { TodoList } from './components/TodoList'
import { type TodoTitle, type TodoId, type TodoItem as TodoType } from './types/types'
import { Header } from './components/Header'

const mockData = [
  {
    id: '1',
    title: 'Tarea 1',
    completed: false,
    createdAt: new Date(),
    completedAt: null
  }
]

const App = (): JSX.Element => {
  const [todos, setTodos] = useState(mockData)

  const handleCompleted = ({ id, completed }: Pick<TodoType, 'id' | 'completed'>): void => {
    const newTodos = todos.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          completed
        }
      }
      return todo
    })
    setTodos(newTodos)
  }

  const handleRemoveTodo = ({ id }: TodoId): void => {
    const newTodos = todos.filter(todo => todo.id !== id)
    setTodos(newTodos)
  }

  const handleAddTodo = ({ title }: TodoTitle): void => {
    const newTodo = {
      title,
      id: crypto.randomUUID(),
      completed: false,
      createdAt: new Date(),
      completedAt: null
    }
    const newTodos = [...todos, newTodo]
    setTodos(newTodos)
  }

  return (
    <div className='todoapp'>
      <Header onAddTodo={handleAddTodo} />
      <TodoList
        onToggleCompleteTodo={handleCompleted}
        onRemoveTodo={handleRemoveTodo}
        todos={todos}
      />
    </div>
  )
}

export default App
