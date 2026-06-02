import posts from "../data/data.js";

function validatePostData(post) {
    if (typeof post.title !== "string" || post.title.trim() === "") {
        return "Il titolo è obbligatorio";
    }

    if (typeof post.content !== "string" || post.content.trim() === "") {
        return "Il contenuto è obbligatorio";
    }

    if (typeof post.image !== "string" || post.image.trim() === "") {
        return "L'immagine è obbligatoria";
    }

    if (!Array.isArray(post.tags) || post.tags.length === 0) {
        return "Inserire almeno un tag";
    }

    const invalidTag = post.tags.find((tag) => {
        return typeof tag !== "string" || tag.trim() === "";
    });

    if (invalidTag !== undefined) {
        return "Ogni tag deve essere una stringa non vuota";
    }

    if (typeof post.slug !== "string" || post.slug.trim() === "") {
        return "Lo slug è obbligatorio";
    }

    if (typeof post.published !== "boolean") {
        return "Published deve essere un valore booleano";
    }

    if (!Number.isInteger(post.prep_time) || post.prep_time <= 0) {
        return "Il tempo di preparazione deve essere un numero intero positivo";
    }

    if (
        typeof post.created_at !== "string" ||
        post.created_at.trim() === "" ||
        isNaN(Date.parse(post.created_at))
    ) {
        return "La data di creazione non è valida";
    }

    return null;
}


function index(request, response) {
    response.status(200).json(posts);
}

function show(request, response) {
    response.status(200).json(request.post);
}

function destroy(request, response) {
    const postIndex = posts.indexOf(request.post);

    posts.splice(postIndex, 1);

    console.log(posts);

    response.sendStatus(204);
}

function store(request, response) {
    const newPost = request.body;

    const validationError = validatePostData(newPost);

    if (validationError !== null) {
        response.status(400).json({
            error: validationError
        });

        return;
    }

    const postIds = posts.map((post) => {
        return post.id;
    });

    const newId = Math.max(...postIds) + 1;

    newPost.id = newId;

    posts.push(newPost);

    console.log(posts);

    response.status(201).json(newPost);
}

function update(request, response) {
    const post = request.post;

    const updatedPost = request.body;

    const validationError = validatePostData(updatedPost);

    if (validationError !== null) {
        response.status(400).json({
            error: validationError
        });

        return;
    }

    post.title = updatedPost.title;
    post.content = updatedPost.content;
    post.image = updatedPost.image;
    post.tags = updatedPost.tags;
    post.slug = updatedPost.slug;
    post.published = updatedPost.published;
    post.prep_time = updatedPost.prep_time;
    post.created_at = updatedPost.created_at;

    console.log(posts);

    response.status(200).json(post);
}

export { index, show, destroy, store, update };