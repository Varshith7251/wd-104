/* eslint-disable no-undef */

const todoList = require("../todo");

const { all, markAsComplete, add, overdue, dueToday, dueLater } = todoList();

const dateToday = new Date();
const today = dateToday.toLocaleDateString("en-CA");
const tommorow = new Date(
  new Date().setDate(dateToday.getDate() + 1)
).toLocaleDateString("en-CA");
const yesterday = new Date(
  new Date().setDate(dateToday.getDate() - 1)
).toLocaleDateString("en-CA");

describe("Todolist Test Suite", () => {
  beforeAll(() => {
    add({
      title: "Test today",
      completed: false,
      dueDate: today,
    });
    add({
      title: "Test tommorow",
      completed: false,
      dueDate: tommorow,
    });
    add({
      title: "Test yesterday",
      completed: false,
      dueDate: yesterday,
    });
  });

  test("Should add new todo", () => {
    const todoItemsCount = all.length;
    add({
      title: "Test 2 todo",
      completed: false,
      dueDate: new Date().toLocaleDateString("en-CA"),
    });
    expect(all.length).toBe(todoItemsCount + 1);
  });

  test("Should mark a todo as complete", () => {
    expect(all[0].completed).toBe(false);
    markAsComplete(0);
    expect(all[0].completed).toBe(true);
  });

  test("Should retrieve overdue items", () => {
    const todoItemsCount = all.length;
    let overdueItems = overdue();
    const overdueItemsCount = overdueItems.length;
    add({
      title: "Overdue item",
      completed: false,
      dueDate: yesterday,
    });
    expect(all.length).toBe(todoItemsCount + 1);
    overdueItems = overdue();
    expect(overdueItems.length).toBe(overdueItemsCount + 1);
  });

  test("Should retrieve due today items", () => {
    const todoItemsCount = all.length;
    let dueTodayItems = dueToday();
    const dueTodayItemsCount = dueTodayItems.length;
    add({
      title: "Due today item",
      completed: false,
      dueDate: today,
    });
    expect(all.length).toBe(todoItemsCount + 1);
    dueTodayItems = dueToday();
    expect(dueTodayItems.length).toBe(dueTodayItemsCount + 1);
  });

  test("Should retrieve due later items", () => {
    const todoItemsCount = all.length;
    let dueLaterItems = dueLater();
    const dueLaterItemsCount = dueLaterItems.length;
    add({
      title: "Due later item",
      completed: false,
      dueDate: tommorow,
    });
    expect(all.length).toBe(todoItemsCount + 1);
    dueLaterItems = dueLater();
    expect(dueLaterItems.length).toBe(dueLaterItemsCount + 1);
  });
});
