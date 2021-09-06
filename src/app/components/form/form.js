import './form.css';
import './input/input.css';

import engine from '../../lib/engine/engine';
import { formT } from './form.tmp';

import Menu from './menu/menu';
import MessageBlock from './message/message';
import Task from './task/task';

export default class Form {
    constructor(pinned, all) {
        this.container = document.querySelector('.form-container');
        const html = engine(formT(pinned, all));
        this.container.innerHTML = html;

        this.input = this.container.querySelector('input');
        this.pinnedList = new Menu('.menu-list-pinned');
        this.allList = new Menu('.menu-list-all');

        this.container.addEventListener('click', (e) => {
            if (e.target.className.includes('button')) {
                const button = e.target;
                const task = new Task(button.closest('.task-container'));
                const parentList = button.closest('ul');


                if (parentList.className.includes('pinned')) {
                    this.allList.addTask(task.content);
                    this.pinnedList.deleteTask(task);
                }
                else {
                    this.pinnedList.addTask(task.content);
                    this.allList.deleteTask(task);
                }
                this.messageBlock.checkPinned(this.pinnedList.tasks);
                this.onInput();
                task.remove();
            }
        })

        this.container.addEventListener('submit', (e) => this.onSubmit(e));
        this.input.addEventListener('input', () => this.onInput());

        this.messageBlock = new MessageBlock();
        this.messageBlock.checkPinned(this.pinnedList.tasks);
    }

    onInput() {
        const value = this.input.value.toLowerCase();
        const filtered = this.allList.tasks.filter((task) => task.lowContent.includes(value));

        this.allList.tasks.forEach((task) => {
            if (!filtered.some((fTask) => fTask.lowContent === task.lowContent)) {
                task.hideTask();
            }
            if (filtered.some((fTask) => fTask.lowContent === task.lowContent)) {
                task.showTask();
            }
        })
        this.messageBlock.checkNoFound(filtered);
    }

    onSubmit(e) {
        e.preventDefault();
        const { value } = this.input;

        if (!value) {
            console.log('bruhhh wtf');
            this.messageBlock.showInputError();
            return;
        }

        this.allList.addTask(value);
        this.input.value = '';
    }

}
