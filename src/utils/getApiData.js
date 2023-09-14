const API = process.env.RM_API;

async function getData({ url = API, endpoint }) {
    try {
        const response = await fetch(`${url}${endpoint}`);
        const data = await response.json();
        return data;
    } catch (e) {
        throw new Error(e);
    }
}

export default getData;