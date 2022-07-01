import sliderTemplate from "../templates/slider";
import data from "../../data/HYUNDAI.json";
import { createCarItemTemplate } from "../templates/template-creator";
const HomeCatalogue = {
  async render() {
    return `
            ${sliderTemplate}
            <div class="headline">
                <center>
                    <div class="headline-img">
                        <img src="ionic.png" class="d-block w-100 gambar-tengah" alt="gambar mobil"></img>
                    </div>
                </center>
                <div class="col-70">
                    <div class="card card-headline">
                        <div class="card-body body-headline">
                            <h4 class="card-title fw-bolder mb-3">DEALERHYUNDAIOFFICIAL.COM</h4>
                            <p class="card-text fw-bolder">Dealer Hyundai Jakarta Menawarkan Harga & Pelayanan Terbaik</p>
                            <p class="card-text">Dapatkan Pengalaman Membeli Mobil Hyundai di Dealer Terbaik dan Sales Berpengalaman</p>
                            <a href="#" class="btn btn-card mt-3 btn-lg">Request Test Drive</a>
                        </div>
                    </div>
                </div>
            </div>
            <center>
                <div class="youtube-container">
                    <div class="ratio ratio-16x9">
                        <iframe src="https://www.youtube.com/embed/QWKzPG6dE_o?autoplay=0&fs=0&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0&origin=http://youtubeembedcode.com" title="IONIQ 5 - Walkaround with Fitra Eri" allowfullscreen></iframe>
                    </div>
                </div>
            </center>
            <div class="car-products" id="maincontent">
                <h1 class="title-page">Our Products</h1>
                <div>
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
  },
};

export default HomeCatalogue;
