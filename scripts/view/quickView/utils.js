import {qVContainer} from './quickView'
export function createModalQuickView({img}) {
    const modal = qVContainer
    modal.insertAdjacentHTML('afterBegin',
    `
        <div class="quick-view__content">
        <button class="quick-view__content-close" id="close-btn" type="button">X</button>
        <img class="quick-view__content-image" src="${img}" alt="goods">
        </div>
        `
    );
    return modal;
}
