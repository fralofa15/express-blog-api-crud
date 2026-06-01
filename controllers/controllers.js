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

function destroy(request, response) {
    const id = parseInt(request.params.id);

    if (isNaN(id) || id <= 0) {
        response.status(400).json({
            error: "Id non valido"
        });

        return;
    }

    const postIndex = posts.findIndex((post) => {
        return post.id === id;
    });

    if (postIndex === -1) {
        response.status(404).json({
            error: "Post non trovato"
        });

        return;
    }

    posts.splice(postIndex, 1);

    console.log(posts);

    response.sendStatus(204);
}

function store(request, response) {
    const newPost = request.body;

    if (typeof newPost.title !== "string" || newPost.title.trim() === "") {
        response.status(400).json({
            error: "Il titolo è obbligatorio"
        });

        return;
    }

    if (typeof newPost.content !== "string" || newPost.content.trim() === "") {
        response.status(400).json({
            error: "Il contenuto è obbligatorio"
        });

        return;
    }

    if (typeof newPost.image !== "string" || newPost.image.trim() === "") {
        response.status(400).json({
            error: "L'immagine è obbligatoria"
        });

        return;
    }

    if (!Array.isArray(newPost.tags) || newPost.tags.length === 0) {
        response.status(400).json({
            error: "Inserire almeno un tag"
        });

        return;
    }

    const invalidTag = newPost.tags.find((tag) => {
        return typeof tag !== "string" || tag.trim() === "";
    });

    if (invalidTag !== undefined) {
        response.status(400).json({
            error: "Ogni tag deve essere una stringa non vuota"
        });

        return;
    }

    if (typeof newPost.slug !== "string" || newPost.slug.trim() === "") {
        response.status(400).json({
            error: "Lo slug è obbligatorio"
        });

        return;
    }

    if (typeof newPost.published !== "boolean") {
        response.status(400).json({
            error: "Published deve essere un valore booleano"
        });

        return;
    }

    if (!Number.isInteger(newPost.prep_time) || newPost.prep_time <= 0) {
        response.status(400).json({
            error: "Il tempo di preparazione deve essere un numero intero positivo"
        });

        return;
    }

    if (
        typeof newPost.created_at !== "string" ||
        newPost.created_at.trim() === "" ||
        isNaN(Date.parse(newPost.created_at))
    ) {
        response.status(400).json({
            error: "La data di creazione non è valida"
        });

        return;
    }

    console.log(newPost);

    response.status(200).json(newPost);
}

export { index, show, destroy, store };