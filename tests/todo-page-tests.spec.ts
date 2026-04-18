import { test, expect } from "@playwright/test";
import { TodoPage } from "../page-objects/todo-page.ts";

test.describe("TodoMVC functionality", () => {
  let todoPage: TodoPage;

  test.beforeEach(async ({ page }) => {
    todoPage = new TodoPage(page);
    await todoPage.goto();
  });

  test("Redirect to original app links", async ({ page }) => {
    await todoPage.clickLink("real TodoMVC app.");
    await expect(page).toHaveURL("https://todomvc.com/");
  });

  test("Create one first task", async () => {
    await todoPage.addTodo("first task");
    await expect(todoPage.todoItems).toHaveText(["first task"]);
  });

  test("Create two tasks and remove second one", async () => {
    await todoPage.addTodo("first task");
    await todoPage.addTodo("second task");
    
    await expect(todoPage.todoItems).toHaveText(["first task", "second task"]);
    await expect(todoPage.todoCount).toHaveText("2 items left");

    await todoPage.removeTodo("second task");

    await expect(todoPage.todoItems).toHaveText(["first task"]);
    await expect(todoPage.todoCount).toHaveText("1 item left");
  });

  test("Create task and mark it as done", async () => {
    await todoPage.addTodo("first task");
    await todoPage.toggleTodo("first task");

    await expect(todoPage.todoCount).toHaveText("0 items left");

    await todoPage.completedFilter.click();
    await expect(todoPage.todoItems).toHaveClass('completed');
    await expect(todoPage.todoItems).toHaveText('first task');
    
    await todoPage.activeFilter.click();
    await expect(todoPage.todoItems).toHaveCount(0)
    await expect(todoPage.todoCount).toHaveText("0 items left");
  });
});