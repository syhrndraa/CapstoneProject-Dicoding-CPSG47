import sliderTemplate from "../templates/slider";

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
        `;
    },

    async afterRender() {}
}

export default HomeCatalogue;