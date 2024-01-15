import { type TodoItem } from './types/types'

export function getCreationDate (todo: TodoItem): Date {
  return todo.createdAt
}
