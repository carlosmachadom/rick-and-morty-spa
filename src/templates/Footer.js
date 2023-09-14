import mortyIcon from "@images/icons-morty.svg";

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

            <ul class="nav--list>
                <li class="list__item">
                    <a href="#">Github</a>
                </li>
                <li class="list__item">
                    <a href="#">Linkedin</a>
                </li>
            </ul>
        </nav>
    `;

    return view;
}

export default Footer;