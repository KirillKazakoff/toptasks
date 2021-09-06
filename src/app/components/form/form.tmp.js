import { taskAllContainerT, taskPinnedContainerT } from './task/task.tmp';
import inputT from './input/input.tmp';

const listPinnedT = (list) => ({
    block: 'ul',
    cls: 'menu-list menu-list-pinned',
    content: list.map(taskPinnedContainerT),
});

const listAllT = (list) => ({
    block: 'ul',
    cls: 'menu-list menu-list-all',
    content: list.map(taskAllContainerT),
});

const menuPinnedT = (list) => ({
    block: 'div',
    cls: 'menu menu-pinned',
    content: [{
        block: 'span',
        cls: 'menu-span',
        content: 'Pinned Tasks',
    }, listPinnedT(list)],
})

const menuAllT = (list) => ({
    block: 'div',
    cls: 'menu menu-all',
    content: [{
        block: 'span',
        cls: 'menu-span',
        content: 'All Tasks',
    }, listAllT(list)],
})

const formT = (pinned, all) => ({
    block: 'div',
    cls: 'form-tasks',
    content: [inputT(), menuPinnedT(pinned), menuAllT(all)],
})

export { formT, listAllT, listPinnedT };

