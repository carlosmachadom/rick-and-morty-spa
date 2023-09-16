import ENPOINTS from "@utils/endpoints";
import getData from "@utils/getApiData";

const charactersData = async ({ id = null, page = 1 } = {}) => {
    const endpoint = id ? `${ENPOINTS["characters"]}/${id}` : `${ENPOINTS["characters"]}?page=${page}`;

    const data = await getData({ endpoint });

    return data;
}

export default charactersData;