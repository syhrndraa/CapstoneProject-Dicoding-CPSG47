import data from "../../data/PRODUCTS.json";
import { createCarDetailTemplate } from "../templates/template-creator";
import UrlParser from "../../routes/url-parser";

const HomeCatalogue = {
    async render() {
        return `
            <div>
                <h1>Detail</h1>
                <div class="container">
                    <div class="post" id="product-list"></div>
                </div>
            </div>    
        `;
    },

    async afterRender() {
        const url = UrlParser.parseActiveUrlWithoutCombiner();
        const carContainer = document.querySelector("#product-list");
        data.cars.forEach((car) => {
            if(car.id == url.id) {
                carContainer.innerHTML += createCarDetailTemplate(car);
            }
            });
    }
}

export default HomeCatalogue;