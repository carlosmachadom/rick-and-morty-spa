const Character = async () => {
    const view = await `
        <section>
            <article>
                <figure class="characters-image">
                    <img src="" alt="" title="" />
                </figure>


                <h2>Name:
                    <span class="character-name"></span>
                </h2>
            </article>
        </section>
    `;

    return view;
}

export default Character;