import posts from "../data/data.js";

function index(request, response) {
    response.status(200).json(posts);
}

function show(request, response) {
    const id = parseInt(request.params.id);

    if (isNaN(id) || id <= 0) {
        response.status(400).json({
            error: "Id non valido"
        });

        return;
    }

    const post = posts.find((post) => {
        return post.id === id;
    });

    if (post === undefined) {
        response.status(404).json({
            error: "Post non trovato"
        });

        return;
    }

    response.status(200).json(post);
}

export { index, show };