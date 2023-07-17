import { View } from "./view/view";
import { Model } from "./model/model";
import { ProductAction, ProductStatus } from "./constants";

export class Controller {
    constructor() {
        this.model = new Model();
        this.view = new View({
            products: this.model.products,
            productsInBasket: this.model.getProductsInBasket(),
            onProductAction: this.onProductAction,
            onClearProductsFromBasket: this.onClearProductsFromBasket,
            totalPrice: this.model.getTotalPrice(),
            onProductsSearch: this.onProductsSearch,
            onClearSearch: this.onClearSearch
        }) 
    }

    setProductStatus = (productId, productStatus) => {
        this.model.setProductStatus(productId, productStatus);
    }

    onProductAction = (action, payload) => {
        if (action === ProductAction.AddToCart || action === ProductAction.RemoveFromCart) {
            this.setProductStatus(
                payload,
                action === ProductAction.AddToCart
                    ? ProductStatus.InCart
                    : ProductStatus.NotInCart);
        }

        if (action === ProductAction.QuickView) {
            this.view.quickViewModal.onQuickView(payload);
        }

        this.view.renderProductsInBasket(this.model.getProductsInBasket());
        this.view.setTotalPrice(this.model.getTotalPrice());
        this.onClearSearch();
    }

    onClearProductsFromBasket = () => {
        this.model.removeProductsFromBasket();
        this.view.renderProductsInBasket(this.model.getProductsInBasket());
        this.view.setTotalPrice(this.model.getTotalPrice());
        this.onClearSearch();
    }

    onProductsSearch = (searchText) => {
        this.view.renderProducts(this.model.searchProduct(searchText));
        
        if (Object.keys(this.model.searchProduct(searchText)).length === 0 || Object.keys(this.model.searchProduct(searchText)) === undefined) {
            this.view.SearchForm.searchRequest.textContent = "По вашему запросу ничего не найдено";
        } else {
            this.view.SearchForm.searchRequest.textContent = searchText;
        }
    }

    onClearSearch = () => {
        this.view.SearchForm.searchForm.reset();
        this.view.SearchForm.searchRequest.textContent = "Хиты продаж";
        this.view.renderProducts(this.model.products);
    }
}
