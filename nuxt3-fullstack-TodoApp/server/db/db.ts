export interface Todo {
  id: string;
  text: string;
  completed: boolean;
}

export interface db {
  todos: Todo[];
}

export const db: db = {
  todos: [],
};

