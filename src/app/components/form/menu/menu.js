import './menu.css';
import engine from '../../../lib/engine/engine';

import { taskAllContainerT, taskPinnedContainerT } from '../task/task.tmp';
import Task from '../task/task';

export default class Menu {
    constructor(listCls) {
        this.container = document.querySelector(listCls);
        this.tasks = [...this.container.children].map((child) => new Task(child));
    }

    addTask(title) {
        let html = null;
        if (this.container.className.includes('menu-list-pinned')) {
            html = engine(taskPinnedContainerT(title));
        } else {
            html = engine(taskAllContainerT(title));
        }
        this.container.insertAdjacentHTML('beforeend', html);

        const { children } = this.container;
        const task = children[children.length - 1];
        this.tasks.push(new Task(task));
    }

    deleteTask(delTask) {
        const index = this.tasks.findIndex(
            (task) => task.content === delTask.content,
        );
        this.tasks.splice(index, 1);
    }
}
