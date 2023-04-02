import { db } from "~~/server/db/db";
import { v4 as uuid } from "uuid";

export default defineEventHandler(async (event) => {
  const { method } = event.req;

  if (method === "GET") {
    return db.todos;
  }
  if (method === "POST") {
    const body = await readBody(event);
    console.log(body);

    const newTodo = {
      id: uuid(),
      text: body.text,
      completed: body.completed,
    };

    db.todos.push(newTodo);
    return newTodo;
  }
});
