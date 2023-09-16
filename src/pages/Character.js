import getHash from "@utils/getUrlHash";
import charactersData from "@utils/getCharacters";

const Character = async () => {

    const id = getHash();
    const character = await charactersData({ id: id });

    const {
        image,
        name,
        episode,
        status,
        species,
        gender,
        origin,
        location
    } = character;

    const view = await `
        <section class="character-layout">
            <article class="character-card">
                <figure class="character--image">
                    <img src="${image}" alt="image of ${name}" title="image of ${name}" />
                </figure>

                <section class="character--data">
                    <h2 class="character--name">Name:
                        <span>${name}</span>
                    </h2>
                    
                    <h3>Status: <span>${status}</span></h3>
                    <h3>Espisodes: <span>${episode.length}</span></h3>
                    <h3>Species: <span>${species}</span></h3>
                    <h3>Gender: <span>${gender}</span></h3>
                    <h3>Origin: <span>${origin.name}</span></h3>
                    <h3>Last location: <span>${location.name}</span></h3>
                </section>
            </article>
        </section>
    `;

    return view;
}

export default Character;