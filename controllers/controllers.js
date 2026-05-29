import posts from "../data/data.js";

function index(request, response) {
    response.status(200).json(posts);
}

export { index };