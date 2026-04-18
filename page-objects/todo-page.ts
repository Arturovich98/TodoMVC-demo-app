import { type Locator, type Page } from "@playwright/test";

export class TodoPage {
  readonly page: Page;
  readonly input: Locator;
  readonly todoItems: Locator;
  readonly todoCount: Locator;
  readonly activeFilter: Locator;
  readonly completedFilter: Locator;

  constructor(page: Page) {
    this.page = page;
    this.input = page.getByRole("textbox", { name: "What needs to be done?" });
    this.todoItems = page.locator('.todo-list [data-testid="todo-item"]');
    this.todoCount = page.locator('[data-testid="todo-count"]');
    this.activeFilter = page.getByRole("link", { name: "Active" });
    this.completedFilter = page.getByRole("link", { name: "Completed" });
  }

  async goto() {
    await this.page.goto("");
  }

  async addTodo(text: string) {
    await this.input.fill(text);
    await this.input.press("Enter");
  }

  async removeTodo(text: string) {
    const item = this.todoItems.filter({ hasText: text });
    await item.hover();
    await item.getByRole("button", { name: "Delete" }).click();
  }

  async toggleTodo(text: string) {
    await this.todoItems
      .filter({ hasText: text })
      .getByRole("checkbox")
      .click();
  }

  async clickLink(name: string | RegExp) {
    await this.page.getByRole("link", { name }).click();
  }
}
