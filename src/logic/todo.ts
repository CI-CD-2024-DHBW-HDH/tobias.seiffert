import { writable } from "svelte/store";
import { v4 as uuidv4 } from "uuid";

export class TodoItem {
  id = "";
  value = "";
  done = false;
}

export function generateID(): string {
  return uuidv4();
}

// make sure, that
// the value isn't longer than 255 characters
// the value isn' empty
// the todo isn't contained in the todos array (case insensitive)
export function validateTodo(todo: TodoItem, todos: TodoItem[]): boolean {
  if (todo.value.length > 255) return false;
  if (todo.value.length === 0) return false;
  for (const t of todos) {
    if (t.value.toLowerCase() === todo.value.toLowerCase()) return false;
  }
  return true;
}

// capitalize the first letter of the todo
export function formatTodo(todo: TodoItem): TodoItem {
  const value = todo.value[0].toLocaleUpperCase() + todo.value.substring(1);
  return {
    id: todo.id,
    value: value,
    done: false,
  };
}

// generate a random rgb color
// each value (r,g,b) should be between 50 and 150
export function generateColor(): string {
  const r = generateColorValue();
  const g = generateColorValue();
  const b = generateColorValue();

  return `rgb(${r},${g},${b})`;
}

function generateColorValue(): number {
  return 50 + Math.random() * 150;
}

export const todoList = writable<TodoItem[]>([]);
