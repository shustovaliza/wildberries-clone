import { createTableHeader, createEmptyRow, createRow } from "./utils";

export class Basket {
    constructor({ productsInBasket, onClearProductsFromBasket, totalPrice }) {
        this.basketModalWindow = document.querySelector(".basket__modal");
        this.basketContent = document.querySelector(".basket__content");
        this.productsWrap = document.querySelector(".purchases");
        this.tableHeader = createTableHeader();
        this.tableBody = document.createElement('tbody');
        this.clearButton = document.querySelector('.clear');
        this.totalPrice = document.querySelector('.result');
        this.totalPrice.textContent = `Итого: ${totalPrice} р.`;

        this.ascentBasket = this.ascentBasket();
        this.escBasket = this.escBasket();
        this.renderProductsInBasket(productsInBasket);

        this.productsWrap.append(this.tableHeader, this.tableBody);

        this.clearButton.addEventListener('click', onClearProductsFromBasket);
    }

    ascentBasket() {
        document.addEventListener("click", (event) => {
            const className = event.target.className;
            if (className === "header__basket-img") {
                this.onOpen();
            } else if (className === "close") {
                this.onClose();
            } else if (!event.composedPath().includes(this.basketContent)) {
                this.onClose();
            }
        });
    }

    escBasket() {
        document.addEventListener('keyup', (event) => {
            if (event.key === 'Escape') {
                this.onClose()
            }
        })
    }

    onOpen() {
        this.basketModalWindow.style.display = "block";
    }

    onClose() {
        this.basketModalWindow.style.display = "none";
    }

    renderProductsInBasket = (productsInBasket) => {
        this.tableBody.innerHTML = '';

        if (productsInBasket.length > 0) {
            for (const product of productsInBasket) {
                this.tableBody.append(
                    createRow(product)
                );
            }
            return;
        }

        this.tableBody.append(
            createEmptyRow()
        );
    }

    setTotalPrice = (totalPrice) => {
        this.totalPrice.textContent = `Итого: ${totalPrice} р.`;
    }
}
