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
    <article tabindex="0" class="card post-item">
        <img src="${car.image}" class="card-img-top"></img>
        <div class="card-body">
            <h5 class="card-title">${car.nama}</h5>
            <div class="description">
            <p class="card-text">${car.description}</p>
            </div>
            <a href="#" class="btn btn-primary">Details</a>
        </div>
    </article>
`;

export {createCarItemTemplate, createCarDetailTemplate};