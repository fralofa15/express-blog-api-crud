import posts from "../data/data.js";

function checkPostId(request, response, next) {
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

    request.post = post;

    next();
}

export default checkPostId;