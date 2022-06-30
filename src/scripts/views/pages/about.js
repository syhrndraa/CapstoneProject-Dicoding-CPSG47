const About = {
  async render() {
    return `
      <div class="container mt-5">
      <div class="row">
          <div class="col-lg">
              <h3 class="fw-bolder">About Us</h3>
              <img src="ionic.png" class="img-fluid text-center w-100" alt="Hyundai Ionic">
              <p class="mt-1 text-left">Didirikan pada tahun 2020, Hyundai Motors Indonesia adalah anak perusahaan penjualan dan distributor resmi Hyundai Motor Company untuk mobil penumpang Hyundai di Indonesia. Visi perusahaan, "Progress for Humanity", adalah dasar dari dedikasi kami dalam menyediakan jajaran produk dengan teknologi yang membantu membangun solusi untuk masa depan yang lebih berkelanjutan. Perusahaan ini berencana meraih posisi terdepan dalam elektrifikasi menurut Strategi 2025 dengan berfokus 
              untuk menghadirkan produk dan layanan yang paling diinginkan pelanggan dan menjadi Produsen Solusi Mobilitas Cerdas.</p>
          </div>
          <div class="col-lg">
              <h3 class="fw-bolder">Lokasi</h3>
              <iframe  width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d325.0177368038968!2d106.85546393183725!3d-6.131200992027867!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6a1f38f0abe403%3A0xa6a0faf33e70fae!2sHyundai%20Sunter%20Official!5e0!3m2!1sen!2sid!4v1656575242766!5m2!1sen!2sid"></iframe>
          </div>
      </div>
      <div class="row mt-3">
          <div class="col-sm-4">
              <h3 class="fw-bolder">Kontak</h3>
                <p>Informasi Test Drive dan Pembelian Hubungi : <p>
                <p class="fw-bolder">Mike Sutista Senior Sales Manager</p>
                    <button class="btn btn-danger btn-sm"><i class="fa-solid fa-envelope"></i> KONTAK.SALES@MAil.COM</button><br>
                    <button class="btn btn-success btn-sm my-1"><i class="fa-brands fa-whatsapp"></i> +6281290077116</button> <br>
            </div>
        </div>
          `;
  },

  async afterRender() {},
};

export default About;
