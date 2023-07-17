import { createButton, createDiv } from "../utils";
import { ProductStatus, ProductAction } from "../../constants";

export function createProduct({ id, name, price, img, status }) {

    const productContainer = createDiv({ class: "card" });
    productContainer.id = id;

    const productImageWrap = createDiv({ class: "card__image" });
    const productImage = document.createElement('img');
    productImage.src = img;
    productImage.classList.add('img');

    const priceAndNameWrap = createDiv({ class: 'price-name-wrap' })

    const productPrice = createDiv({ class: "price" });
    productPrice.textContent = `${price} р.`;

    const productName = createDiv({ class: "name" });
    productName.textContent = `${name}`;

    const isInCart = status === ProductStatus.InCart;

    const addToCartButton = createButton(isInCart ? "В корзине" : "В корзину", {
        class: "add-to-cart-button",
        type: 'button',
        'data-product-action': isInCart ? ProductAction.RemoveFromCart : ProductAction.AddToCart,
        'data-product-id': id,
    });

    addToCartButton.classList.add(isInCart ? "add-to-cart-button-gray" : "add-to-cart-button");

    const quickViewButton = createButton("Быстрый просмотр", {
        class: "quick-view-button",
        type: 'button',
        'data-product-action': ProductAction.QuickView,
        'data-product-id': id
    }) 

    productContainer.addEventListener('mouseover', (event) => {
        const target = event.target;
        if (target.className === 'img' || target.className === 'quick-view-button') {
            quickViewButton.classList.add('quick-view-button-active');
        }
    })

    productContainer.addEventListener('mouseout', (event) => {
        const target = event.target;
        if (target.className === 'img' || target.className === 'quick-view-button') {
            quickViewButton.classList.remove('quick-view-button-active');
        }
    })

    priceAndNameWrap.append(productPrice, productName, addToCartButton);
    productImageWrap.append(productImage);
    productContainer.append(productImageWrap, priceAndNameWrap, quickViewButton);

    return productContainer;
}
