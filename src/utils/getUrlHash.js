const getHash = () => {
    const hash = location.hash.slice(1).toLocaleLowerCase().split('/');
    return hash[hash.length - 1] || '/';
}

export default getHash;