import charactersData from "@utils/getCharacters";
import HomeCard from "@components/Card";

const Home = async () => {
    const characters = await charactersData({});

    const view = await `
        <div class="general-content">
            <div class="title-container">
                <h2 class="app--title">Welcome to Rick and Morty characters list</h2>
                <p class="app--description">Select any character</p>
            </div>

            <ul class="characters-list">
                ${characters["results"].map((character) => {
        const { id, image, name } = character;
        const card = HomeCard({ id, image, name });
        return `<li class="character-card">${card}</li>`
    }).join('')
        }
            </ul>
        </div>
    `;

    return view;
}

export default Home;