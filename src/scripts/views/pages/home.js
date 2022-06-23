import sliderTemplate from "../templates/slider";

const HomeCatalogue = {
  async render() {
    return `
            ${sliderTemplate}
            <div class="headline">
                <div>
                    <img src="ionic.png" class="d-block w-100"></img>
                </div>
                <div>
                <div class="col-70">
                    <div class="card">
                        <div class="card-body">
                            <h4 class="card-title fw-bolder mb-3">DEALERHYUNDAIOFFICIAL.COM</h4>
                            <p class="card-text fw-bolder">Dealer Hyundai Jakarta Menawarkan Harga & Pelayanan Terbaik</p>
                            <p class="card-text">Dapatkan Pengalaman Membeli Mobil Hyundai di Dealer Terbaik dan Sales Berpengalaman</p>
                            <a href="#" class="btn btn-card mt-3 btn-sm">Request Test Drive</a>
                        </div>
                    </div>
                </div>
            </div>          
        `;
  },

  async afterRender() {},
};

export default HomeCatalogue;
