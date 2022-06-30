import data from "../../data/PRODUCTS.json";
import { createCarItemTemplate } from "../templates/template-creator";

const CarList = {
    async render() {
        return `
            <div>
                <h1>Our Products</h1>
                <div class="container">
                    <div class="post" id="product-list"></div>
                </div>
            </div>
        `;
    },
    async afterRender() {
        const carContainer = document.querySelector("#product-list");
        data.cars.forEach((car) => {
            carContainer.innerHTML += createCarItemTemplate(car);
            });
    }
}

export default CarList;