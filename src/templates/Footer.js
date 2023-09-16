import mortyIcon from "@images/icons-morty.svg";
import linkedinIcon from "@images/linkedin.png";
import githubIcon from "@images/github-sign.png";

const Footer = async () => {
    const view = await `
        <nav class="footer-nav">
            <section class="logo--section">
                <a href="/" class="logo__container">
                    <img src="${mortyIcon}" alt="Logo Rick and Morty SPA" title="Logo Rick and Morty SPA"/>
                </a>
            </section>

            <section>
                <p>Created by Carlos Machado</p>
            </section>

            <ul class="nav--list">
                <li class="list__item">
                    <a href="https://github.com/carlosmachadom">
                        <img src="${githubIcon}" alt="Github link" title="Github link"/>
                    </a>
                </li>
                <li class="list__item">
                    <a href="https://www.linkedin.com/in/carlos-machado-mejia/">
                        <img src="${linkedinIcon}" alt="Linkedin link" title="Linkedin link"/>
                    </a>
                </li>
            </ul>
        </nav>
    `;

    return view;
}

export default Footer;