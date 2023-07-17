import trousersImg from '../img/cards/1.jpeg';
import sneakersImg from '../img/cards/2.jpeg';
import tshirtImg from '../img/cards/tshirt1.jpeg';
import jacketImg from '../img/cards/4.jpeg';
import jeansImg from '../img/cards/5.jpeg';
import shoesImg from '../img/cards/6.jpeg';
import towelImg from '../img/cards/7.jpeg';
import hairbrushImg from '../img/cards/8.jpeg';
import purseImg from '../img/cards/9.jpeg';
import socksImg from '../img/cards/10.jpeg';
import phoneImg from '../img/cards/11.jpeg';
import lipstickImg from '../img/cards/12.jpeg';
import bagImg from '../img/cards/13.jpeg';
import longsleeveImg from '../img/cards/14.jpeg';
import skirtImg from '../img/cards/15.jpeg';

export const ProductAction = {
    QuickView: ' quick-view',
    AddToCart: 'add-to-cart',
    RemoveFromCart: 'remove-from-cart'
}

export const ProductStatus = {
    InCart: 'in-cart',
    NotInCart: 'not-in-cart'
}

export const getDefaultProducts = () => {
    return [
        {
            id: window.crypto.randomUUID(),
            name: "Брюки",
            price: 100,
            img: trousersImg,
            status: ProductStatus.NotInCart
        },
        {
            id: window.crypto.randomUUID(),
            name: "Кеды",
            price: 250,
            img: sneakersImg,
            status: ProductStatus.NotInCart
        },
        {
            id: window.crypto.randomUUID(),
            name: "Футболка",
            price: 70,
            img: tshirtImg,
            status: ProductStatus.NotInCart
        },
        {
            id: window.crypto.randomUUID(),
            name: "Куртка",
            price: 300,
            img: jacketImg,
            status: ProductStatus.NotInCart
        },
        {
            id: window.crypto.randomUUID(),
            name: "Джинсы",
            price: 150,
            img: jeansImg,
            status: ProductStatus.NotInCart
        },
        {
            id: window.crypto.randomUUID(),
            name: "Туфли",
            price: 100,
            img: shoesImg,
            status: ProductStatus.NotInCart
        },
        {
            id: window.crypto.randomUUID(),
            name: "Полотенце",
            price: 15,
            img: towelImg,
            status: ProductStatus.NotInCart
        },
        {
            id: window.crypto.randomUUID(),
            name: "Расческа",
            price: 50,
            img: hairbrushImg,
            status: ProductStatus.NotInCart
        },
        {
            id: window.crypto.randomUUID(),
            name: "Сумка",
            price: 150,
            img: purseImg,
            status: ProductStatus.NotInCart
        },
        {
            id: window.crypto.randomUUID(),
            name: "Носки",
            price: 30,
            img: socksImg,
            status: ProductStatus.NotInCart
        },
        {
            id: window.crypto.randomUUID(),
            name: "Смартфон",
            price: 350,
            img: phoneImg,
            status: ProductStatus.NotInCart
        },
        {
            id: window.crypto.randomUUID(),
            name: "Помада",
            price: 50,
            img: lipstickImg,
            status: ProductStatus.NotInCart
        },
        {
            id: window.crypto.randomUUID(),
            name: "Сумка",
            price: 65,
            img: bagImg,
            status: ProductStatus.NotInCart
        },
        {
            id: window.crypto.randomUUID(),
            name: "Лонгслив",
            price: 60,
            img: longsleeveImg,
            status: ProductStatus.NotInCart
        },
        {
            id: window.crypto.randomUUID(),
            name: "Юбка",
            price: 65,
            img: skirtImg,
            status: ProductStatus.NotInCart
        }
    ]
}
