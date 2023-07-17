import { getDefaultProducts } from "../constants"
import { ProductStatus } from "../constants"

const LocalStorageKey = {
    Products: 'products'
};

export class Model {
    constructor() {
        this.products = this.getSaveProducts();
    }

    setProductStatus = (productId, productStatus) => {

        const productIndex = this.products.findIndex(({ id }) => id === productId);

        if (productIndex > -1) {
            this.products[productIndex] = {
                ...this.products[productIndex],
                status: productStatus
            };
            localStorage.setItem(LocalStorageKey.Products, JSON.stringify(this.products));
        }
    }

    getSaveProducts = () => {
        const savedProducts = localStorage.getItem(LocalStorageKey.Products);
        if (!savedProducts) {
            return getDefaultProducts();
        }
        return JSON.parse(savedProducts);
    }

    getProductsInBasket = () => {
        return this.products.filter(({ status }) => status === ProductStatus.InCart);
    }

    removeProductsFromBasket = () => {
        this.products.forEach(product => {
            product.status = ProductStatus.NotInCart
        });
        localStorage.setItem(LocalStorageKey.Products, JSON.stringify(this.products));
        return this.products;
    }

    getTotalPrice = () => {
        const productsInBasket = this.getProductsInBasket();
        if (productsInBasket === undefined) {
            return 0;
        } else if (productsInBasket.length === 0) {
            return 0;
        } else {
            return productsInBasket.reduce((acc, curr) =>  acc + curr.price, 0);
        }
    }

    searchProduct = (searchText) => {
        return this.products.filter(product => product.name.includes(searchText));
    }
}
