export interface Todo {
  id: string;
  text: string;
  completed: boolean;
}

export interface db {
  todos: Todo[];
}

export let db: db = {
  todos: [
    {
      id: "2c7d9e0d-c857-4775-8c27-c66cb98cb6a3",
      text: "im naive",
      completed: false,
    },
    {
      id: "d0fc22ef-2fe4-496d-8d6c-3bc2fe81c815",
      text: "im naive",
      completed: false,
    },
    {
      id: "a7d4b12e-6c48-424d-8bb9-2d433f3f2361",
      text: "im naive",
      completed: false,
    },
  ],
};
