const createCarItemTemplate = (car) => `
    <article tabindex="0" class="post-item">
        <p>${car.nama}</p>
    </article>
`;

export {createCarItemTemplate};