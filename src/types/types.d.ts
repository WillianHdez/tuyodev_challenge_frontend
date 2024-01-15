export interface TodoItem {
  id: string
  title: string
  completed: boolean
  createdAt: Date
  completedAt: Date | null
}

export type TodoId = Pick<TodoItem, 'id'>
export type TodoTitle = Pick<TodoItem, 'title'>
export type TodoCompleted = Pick<TodoItem, 'completed'>

export type ListOfTodos = TodoItem[]
