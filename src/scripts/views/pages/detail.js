import data from "../../data/HYUNDAI.json";
import { createCarDetailTemplate } from "../templates/template-creator";
import UrlParser from "../../routes/url-parser";

const HomeCatalogue = {
    async render() {
        return `
            <div>
                <h1 class="title-page">Detail</h1>
                <div class="container">
                    <div class="" id="product-detail"></div>
                </div>
            </div>    
        `;
    },

    async afterRender() {
        const url = UrlParser.parseActiveUrlWithoutCombiner();
        const carContainer = document.querySelector("#product-detail");
        data.cars.forEach((car) => {
            if(car.id == url.id) {
                carContainer.innerHTML += createCarDetailTemplate(car);
            }
            });
    }
}

export default HomeCatalogue;