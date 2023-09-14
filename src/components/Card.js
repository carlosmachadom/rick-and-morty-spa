const HomeCard = ({ id, image, name, origin }) => {
    let view = `
        <a class="character--link" href="#/${id}">
            <article class="character--info">
                <figure class="character__image">
                    <img src="${image}" alt="${name}"/>
                </figure>
                <div class="character__data">
                    <h3>Name: <span class="character-name">${name}</span></h3>
                    <h3>Origin: <span class="character-origin">${origin}</span></h3>
                </div>
            </article>
        </a>
    `
    return view;
}

export default HomeCard;