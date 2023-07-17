import { createProduct } from "./utils";
import { createDiv } from "../utils";
import { ProductAction } from "../../constants";

export class Products {
    constructor({ products, onProductAction }) {
        this.productsWrap = createDiv({ class: "goods__cards" });
        this.productsWrap.id = 'cards';
        
        this.productsWrap.addEventListener('click', ({ target }) => {
            if (Object.values(ProductAction).includes(target.dataset.productAction)) {
                onProductAction(target.dataset.productAction, target.dataset.productId);
            }
        });

        this.renderProducts(products);
    }

    renderProducts = (products) => {
        this.productsWrap.innerHTML = '';
        
        if (products.length > 0) {
            for (const product of products) {
                this.productsWrap.append(
                    createProduct(product)
                );
            }
            return;
        }
    }
}
