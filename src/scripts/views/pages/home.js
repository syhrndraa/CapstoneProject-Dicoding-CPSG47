import sliderTemplate from "../templates/slider";
import data from "../../data/PRODUCTS.json";
import { createCarItemTemplate } from "../templates/template-creator";
const HomeCatalogue = {
    async render() {
        return `
            ${sliderTemplate}
            <div class="headline">
                <div>
                    KONTEN
                </div>
                <div>
                    <img src="ionic.png" class="d-block w-100"></img>
                </div>
            </div> 
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

export default HomeCatalogue;