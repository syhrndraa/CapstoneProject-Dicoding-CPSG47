const sliderTemplate = `
<section class="slider">
    <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
        <div class="carousel-item active carousel-main" data-bs-interval="3000">
            <img src="heros/hero-image1.jpg" class="d-block w-100" alt="gambar carousell">
            <div class="carousel-caption d-none d-md-block">
            <h5>Perusahaan Mobil Nomor 1 di Dunia</h5>
            <p>Kami telah berdedikasi untuk mengembangkan mobil terbaik</p>
            </div>
        </div>
        <div class="carousel-item carousel-main" data-bs-interval="3000">
            <img src="heros/hero-image2.jpg" class="d-block w-100" alt="gambar carousell">
            <div class="carousel-caption d-none d-md-block">
            <h5>Ramah Lingkungan</h5>
            <p>Menciptakan mobil ramah lingkungan merupakan tujuan kami</p>
            </div>
        </div>
        <div class="carousel-item carousel-main">
            <img src="heros/hero-image3.jpg" class="d-block w-100" alt="gambar carousell">
            <div class="carousel-caption d-none d-md-block">
            <h5>Pelayanan Terbaik</h5>
            <p>Kami tersebar di seluruh penjuru Indonesia, dapatkan pelayanan kelas dunia dari kami</p>
            </div>
        </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
        </button>
    </div>
</section>
`;
export default sliderTemplate;