const HomeCard = ({ id, image, name }) => {
    let view = `
        <a class="character--link" href="#/character/${id}">
            <article class="character--info">
                <figure class="character__image">
                    <img src="${image}" alt="${name}"/>
                </figure>
                <div class="character__data">
                    <h3 class="character-name">Name: <span>${name}</span></h3>
                </div>
            </article>
        </a>
    `
    return view;
}

export default HomeCard;