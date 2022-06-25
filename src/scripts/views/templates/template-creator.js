const createCarItemTemplate = (car) => `
    <article tabindex="0" class="card post-item">
        <img src="${car.image}" class="card-img-top"></img>
        <div class="card-body">
            <h5 class="card-title">${car.nama}</h5>
            <div class="description">
            <p class="card-text">${car.description}</p>
            </div>
            <a href="${`/#/detail/${car.id}`}" class="btn btn-primary">Details</a>
        </div>
    </article>
`;
const createCarDetailTemplate = (car) => `
    <article tabindex="0" class="detail-car">
    <center>
        <h2>${car.nama}</h2>
        <div id="carouselExampleFade" class="carousel slide carousel-fade carousel-dtl" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="heros/coba.jpg" class="d-block w-100" alt="">
                </div>
            ${car.imagePath
                .map(
                    (image) => `
                    <div class="carousel-item">
                        <img src="${image.path}" class="d-block w-100" alt="">
                    </div>
                    `,
                ).join("")
                }
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
            </button>
        </div>
    </center>
    <div>
        <center>
            <table class="table specs-table">
                <thead>
                <tr>
                    <th scope="col" rowspan="2"></th>
                    <th scope="col">Spesification</th>
                    <th scope="col"><center>Description</center></th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th scope="row" rowspan="5">Dimensi</th>
                    <td>Jarak Terendah</td>
                    <td>${car.jarak} mm</td>
                </tr>
                <tr>
                    <td>Tinggi</td>
                    <td>${car.tinggi} mm</td>
                </tr>
                <tr>
                    <td>Panjang</td>
                    <td>${car.panjang} mm</td>
                </tr>
                <tr>
                    <td>Jarak sumbu roda</td>
                    <td>${car.sumbu} mm</td>
                </tr>
                <tr>
                    <td>Lebar</td>
                    <td>${car.lebar} mm</td>
                </tr>
                <tr>
                    <th scope="row" rowspan="3">Detail Mesin</th>
                    <td>Isi silinder</td>
                    <td>${car.cc} CC</td>
                </tr>
                <tr>
                    <td>Kapasitas bahan bakar</td>
                    <td>${car.tangki} L</td>
                </tr>
                <tr>
                    <td>Jumlah silinder</td>
                    <td>${car.cyl}</td>
                </tr>
                <tr>
                    <th scope="row" rowspan="2">Performa</th>
                    <td>Tenaga</td>
                    <td>${car.tenaga}</td>
                </tr>
                <tr>
                    <td>Torsi</td>
                    <td>${car.torsi}</td>
                </tr>
                <tr>
                    <th scope="row" rowspan="2">Velg & Ban</th>
                    <td>Ukuran ban</td>
                    <td>${car.velg}</td>
                </tr>
                <tr>
                    <td>Material velg</td>
                    <td>${car.materialVelg}</td>
                </tr>
                </tbody>
            </table>
        </center>
    </div>
    <div>
        <center>
            <table class="table table-striped table-hover model-table">
                <thead>
                <tr>
                    <th scope="col"><center>Type</center></th>
                    <th scope="col"><center>Price</center></th>
                </tr>
                </thead>
                <tbody>
                ${car.models
                    .map(
                        (type) => `
                        <tr>
                            <th scope="row">${type.model}</th>
                            <td>${type.tagHarga}</td>
                        </tr>
                        `,
                    ).join("")
                }
                </tbody>
            </table>
        </center>
    </div>
    </article>
`;

export {createCarItemTemplate, createCarDetailTemplate};