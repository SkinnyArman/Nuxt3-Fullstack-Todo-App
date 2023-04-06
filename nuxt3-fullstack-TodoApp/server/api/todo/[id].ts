import { db } from "~~/server/db/db";

export default defineEventHandler((event) => {
  const { method } = event.req;
  const { context } = event;

  let { id } = context.params;
  const item = db.todos.find((todoItem) => todoItem.id === id);

  if (method === "PUT") {
    if (item) {
      item.completed = !item.completed;
      return item;
    } else {
      return {
        status: 500,
        statusMessage: "Error in updating custom claims",
      };
    }
  } else if (method === "DELETE") {
    if (item) {
      db.todos.splice(db.todos.indexOf(item), 1);
      return {
        status: 200,
        statusMessage: "Successfully Deleted.",
      };
    }
  }
});
