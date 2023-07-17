import { Basket } from "./basket/basket";
import { Products } from "./products/products";
import { Slider } from "./slider/slider";
import { quickViewModal } from "./quickView/quickView";
import { SearchForm } from "./search/search";

export class View {
    constructor({ products, onProductAction, productsInBasket, onClearProductsFromBasket, totalPrice, onProductsSearch, onClearSearch }) {
        this.Basket = new Basket({ productsInBasket, onClearProductsFromBasket, totalPrice });
        this.Slider = new Slider();
        this.quickViewModal = new quickViewModal(products);
        this.Products = new Products({ products, onProductAction });
        this.SearchForm = new SearchForm({ onProductsSearch, onClearSearch });

        const container = document.getElementById('goods-container');

        container.append(this.Products.productsWrap);
    }

    renderProductsInBasket = (productsInBasket) => {
        this.Basket.renderProductsInBasket(productsInBasket);
    }

    renderProducts = (products) => {
        this.Products.renderProducts(products);
    }

    setTotalPrice = (totalPrice) => {
        this.Basket.setTotalPrice(totalPrice);
    }
}
