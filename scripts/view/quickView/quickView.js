import { createModalQuickView } from './utils'
export const qVContainer = document.getElementById('quick-view-modal');

export class quickViewModal {
    constructor(products) {
        this.products = products;
        this.container = qVContainer;

        document.addEventListener('click', ({ target }) => {
            if (target.classList.contains('quick-view__content-close') || target.id === 'quick-view-modal') {
                this.container.style.display = "none";
            }
        })
    }

    onQuickView = (productId) => {
        this.container.style.display = "block";
        const product = this.products.find(({id}) => id === productId);
        if (product){
        this.renderQuickView(this.container, product)
        }
    }

    renderQuickView = (container, product) => {
        container.innerHTML = '';
        if (product) {
            createModalQuickView(product)
        }
    }
} 
