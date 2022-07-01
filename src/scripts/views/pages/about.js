const About = {
  async render() {
    return `
      <div class="hero" style="background-image: url('hero-image.jpg')">
          <div class="hero__inner">
              <p class="hero__tagline">
                  &emsp; &emsp;Didirikan pada tahun 2020, Hyundai Motors Indonesia adalah anak perusahaan penjualan dan distributor resmi Hyundai Motor Company untuk mobil penumpang Hyundai di Indonesia. Visi perusahaan, "Progress for Humanity", adalah dasar dari dedikasi kami dalam menyediakan jajaran produk dengan teknologi yang membantu membangun solusi untuk masa depan yang lebih berkelanjutan. Perusahaan ini berencana meraih posisi terdepan dalam elektrifikasi menurut Strategi 2025 dengan berfokus 
                  untuk menghadirkan produk dan layanan yang paling diinginkan pelanggan dan menjadi Produsen Solusi Mobilitas Cerdas.
              </p>
              <h2>-- Hyundai Motors Indonesia</h2>
          </div>
      </div>
      <div class="p-5 mb-4 bg-light rounded-3" id="maincontent" tabindex="0">
        <div class="row">
            <div class="col-lg">
            <h1 class="display-5 fw-bold">Lokasi</h1>
                <p class="col-md-8 fs-4">Berikut adalah salah satu cabang kami yang berada di Jakarta Utara, tepatnya di Jl. Danau Sunter Barat Sunter No.7, Sunter Agung, Kec. Tj. Priok</p>
            </div>
            <div class="col-lg">
                <iframe  width="100%" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d325.0177368038968!2d106.85546393183725!3d-6.131200992027867!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6a1f38f0abe403%3A0xa6a0faf33e70fae!2sHyundai%20Sunter%20Official!5e0!3m2!1sen!2sid!4v1656575242766!5m2!1sen!2sid"></iframe>
            </div>
        </div>
      </div>
      <div class="contact-person">
          <div class="btn btn-danger btn-sm email-contact"><a href=""><span class="fa-solid fa-envelope"></span>&ensp; Email</a></div>
          <div class="btn btn-success btn-sm whatsapp-contact"><a href=""><span class="fa-brands fa-whatsapp"></span>&ensp; Whatsapp</a></div>
      </div>
          `;
  },

  async afterRender() {},
};

export default About;
