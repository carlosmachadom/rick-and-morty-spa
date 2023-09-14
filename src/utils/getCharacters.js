import ENPOINTS from "@utils/endpoints";
import getData from "@utils/getApiData";

const charactersData = async ({ id = null } = {}) => {
    const endpoint = id !== null ? `${ENPOINTS["characters"]}/${id}` : ENPOINTS["characters"];

    const data = await getData({ endpoint });

    return data["results"];
}

export default charactersData;