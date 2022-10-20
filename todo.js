/* eslint-disable no-undef */
const todoList = () => {
  all = [];
  const add = (todoItem) => {
    all.push(todoItem);
  };
  const markAsComplete = (index) => {
    all[index].completed = true;
  };

  const overdue = () => {
    return all.filter((element) => element.dueDate < today);
  };

  const dueToday = () => {
    return all.filter((element) => element.dueDate === today);
  };

  const dueLater = () => {
    return all.filter((element) => element.dueDate > today);
  };

  const toDisplayableList = (list) => {
    let formatted = [];
    list.forEach((element) => {
      if (element.completed) {
        if (element.dueDate === today) {
          formatted.push("[x] " + element.title + " ");
        } else {
          formatted.push("[x] " + element.title + " " + element.dueDate);
        }
      } else {
        if (element.dueDate === today) {
          formatted.push("[ ] " + element.title + " ");
        } else {
          formatted.push("[ ] " + element.title + " " + element.dueDate);
        }
      }
    });
    return formatted.join("\n");
  };

  return {
    all,
    add,
    markAsComplete,
    overdue,
    dueToday,
    dueLater,
    toDisplayableList,
  };
};

const formattedDate = (d) => {
  return d.toISOString().split("T")[0];
};

var dateToday = new Date();
const today = formattedDate(dateToday);
module.exports = todoList;
