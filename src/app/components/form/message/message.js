import './message.css';
import { errorT, noPinnedT, noTaskFoundT } from './message.tmp';
import engine from '../../../lib/engine/engine';

export default class MessageBlock {
    constructor() {
        this.formContainer = document.querySelector('.form-container');
        this.pinnedContainer = this.formContainer.querySelector('.menu-list-pinned');
        this.allListContainer = this.formContainer.querySelector('.menu-list-all');
    }

    showNoPinnedMes() {
        const html = engine(noPinnedT);
        this.pinnedContainer.insertAdjacentHTML('afterbegin', html);
        this.noPinMes = this.pinnedContainer.querySelector('.no-pinned');
    }

    showInputError() {
        const html = engine(errorT);
        this.formContainer.insertAdjacentHTML('afterbegin', html);
        this.error = this.formContainer.querySelector('.submit-error');
        this.removeMessage(this.error);
    }

    showNoFoundMes() {
        const html = engine(noTaskFoundT);
        this.allListContainer.insertAdjacentHTML('afterbegin', html);
        this.noFoundMes = this.allListContainer.querySelector('.no-found');
    }

    checkPinned(tasks) {
        if (tasks.length > 0) {
            if (this.noPinMes) {
                this.noPinMes.remove();
                this.noPinMes = null;
            }
        } else {
            if (!this.noPinMes) {
                this.showNoPinnedMes();
            }
        }
    }

    checkNoFound(filtered) {
        if (filtered.length > 0) {
            if (this.noFoundMes) {
                this.noFoundMes.remove();
                this.noFoundMes = null;
            }
        } else {
            if (!this.noFoundMes) {
                this.showNoFoundMes();
            }
        }
    }

    removeMessage(node) {
        setTimeout(() => node.remove(), 3000);
    }
}
