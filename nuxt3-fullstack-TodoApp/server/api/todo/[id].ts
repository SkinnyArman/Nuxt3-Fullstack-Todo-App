import { db } from "~~/server/db/db";

export default defineEventHandler((event) => {
  const { method } = event.req;
  const { context } = event;

  if (method === "PUT") {
    let { id } = context.params;

    const item = db.todos.find((todoItem) => todoItem.id === id);

    if (item) {
      item.completed = !item.completed;
      return item;
    } else {
      return {
        status: 500,
        statusMessage: "Error in updating custom claims",
      };
    }
  }
});
