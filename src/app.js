import router from "@routes/router";

(async function App() {
    window.addEventListener('load', router);
    window.addEventListener('hashchange', router);
})();