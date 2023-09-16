import logo from "@images/icons-rick-sanchez.svg";

const Header = async () => {
    const view = await `
        <nav class="header-nav">
            <section class="logo--section">
                <a href="/" class="logo__container">
                    <img src="${logo}" alt="Logo Rick and Morty SPA" title="Logo Rick and Morty SPA"/>
                </a>
            </section>

            <ul class="nav--list">
                <li class="list__item">
                    <a href="#/about">About</a>
                </li>
            </ul>
        </nav>
    `;

    return view;
}

export default Header;