const NotFound = async () => {
    const view = await `
        <div>
            <h3>Not Found</h3>
        </div>
    `;

    return view;
}

export default NotFound;