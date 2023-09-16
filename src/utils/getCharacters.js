import ENPOINTS from "@utils/endpoints";
import getData from "@utils/getApiData";

const charactersData = async ({ id = null } = {}) => {
    const endpoint = id ? `${ENPOINTS["characters"]}/${id}` : ENPOINTS["characters"];

    const data = await getData({ endpoint });

    return data;
}

export default charactersData;