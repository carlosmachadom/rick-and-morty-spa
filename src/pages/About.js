import aboutImage from '@images/rm-characters.jpg';

const About = async () => {
    const view = await `
        <section id="about" class="about">
            <h2 class="title">About the Project</h2>
            <p class="description">
                This project is a Single Page Application (SPA) created with Vanilla JavaScript. It uses the Rick and Morty API to fetch character data from the series on the initial page load. The project includes simple routing and the creation of templates and components.
            </p>
            <h3 class="features-title">Future Features</h3>
            <ul class="features-list">
                <li class="feature">
                    <p><strong>Pagination:</strong> Currently, the application only displays character data fetched on the initial page load. I plan to implement pagination to allow users to navigate through all the characters available in the Rick and Morty API.</p>
                </li>
                <li class="feature">
                    <p><strong>More API Data:</strong> In the future, I also plan to include more data from the API, such as the episodes and locations that appear in the series.</p>
                </li>
            </ul>

            <figure class="about-image">
                <img src="${aboutImage}" alt="rick and morty characters" title="rick and morty characters"/>
            </figure>
        </section>
    `;

    return view;
}

export default About;