const taskPinnedButton = {
    block: 'button',
    cls: 'task-button',
    content: {
        block: 'div',
        cls: 'span-button',
        content: 'V',
    },
    attrs: {
        type: 'button',
    },
};

const taskAllButton = {
    block: 'button',
    cls: 'task-button',
    attrs: {
        type: 'button',
    },
};

const taskT = (title) => ({
    block: 'div',
    cls: 'task',
    content: title,
});

const taskAllContainerT = (title) => ({
    block: 'li',
    cls: 'task-container',
    content: [taskT(title), taskAllButton],
});

const taskPinnedContainerT = (title) => ({
    block: 'li',
    cls: 'task-container',
    content: [taskT(title), taskPinnedButton],
});

export { taskAllContainerT, taskPinnedContainerT };
