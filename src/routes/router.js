/* Templates */
import Header from "@templates/Header";
import Footer from "@templates/Footer";

/* Pages */
import Home from "@pages/Home";
import Character from "@pages/Character";
import About from "@pages/About";
import NotFound from "@pages/Error404";

/* routes utils */
import getHash from "@utils/getUrlHash";
import resolveRoute from "@utils/resolveRoutes";

/* Routes */
const routes = {
    '/': Home,
    '/:id': Character,
    '/about': About,
    '*': NotFound
}

/* Router */
const router = async () => {
    const header = null || document.querySelector('.header');
    const footer = null || document.querySelector('.footer');
    const content = null || document.querySelector('.content');

    header.innerHTML = await Header();
    footer.innerHTML = await Footer();

    let urlHash = getHash();
    let route = await resolveRoute(urlHash);
    let render = routes[route] ? routes[route]() : routes['*']();

    content.innerHTML = await render;
}

export default router;