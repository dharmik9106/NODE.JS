import http from "http";

const server = http.createServer((req, res) => {

    if (req.url === "/") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end("Welcome to home page");

    } else if (req.url === "/about") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end("Welcome to about page");

    } else {
        res.writeHead(404, { "Content-Type": "text/html" });
        res.end("Page not found");
    }
});

const port = 5006;

server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});



