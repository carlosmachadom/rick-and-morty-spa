const resolveRoute = async (route) => {
    let routeToValidate = route;
    let validRoute;

    if (routeToValidate.length <= 3) {
        validRoute = routeToValidate === '/' ? routeToValidate : '/:id';
    } else {
        validRoute = `/${routeToValidate}`;
    }

    return validRoute;
}

export default resolveRoute;