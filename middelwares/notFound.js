function notFound(request, response, next) {
    response.status(404).json({
        error: "Rotta non trovata"
    });
}

export default notFound;