import charactersData from "@utils/getCharacters";
import HomeCard from "@components/Card";

const Home = async () => {
    const characters = await charactersData({});

    const view = await `
        <div class="general-content">
            <h2>Welcome to Rick and Morty characters list</h2>
            <p>Select any character</p>

            <ul class="characters-list">
                ${characters.map((character) => {
        const data = {
            id: character.id,
            image: character.image,
            name: character.name,
            origin: character.origin.name
        }

        const card = HomeCard(data);

        return `<li class="character-card">${card}</li>`
    }).join('')
        }
            </ul>
        </div>
    `;

    return view;
}

export default Home;