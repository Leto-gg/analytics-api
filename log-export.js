const elasticEndpoint = "https://your-elastic-endpoint.com";

addEventListener("fetch", (event) => {
    event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
    const response = await fetch(request);
    const log = {
        timestamp: new Date().toISOString(),
        method: request.method,
        url: request.url,
        status: response.status,
    };

    await fetch(`${elasticEndpoint}/your-logs-index/_doc`, {
        method: "POST",
        body: JSON.stringify(log),
        headers: {
            "Content-Type": "application/json",
        },
    });

    return response;
}