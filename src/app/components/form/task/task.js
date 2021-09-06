import './task.css';

export default class Task {
    constructor(node) {
        this.node = node;
        this.content = node.firstElementChild.textContent;
        this.lowContent = this.content.toLowerCase();
        this.button = node.querySelector('.task-button');
    }

    remove() {
        this.node.remove();
    }

    hideTask() {
        this.node.classList.add('task-hidden');
    }

    showTask() {
        this.node.classList.remove('task-hidden');
    }
}