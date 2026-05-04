import http from "http";
import fs from "fs";

const server = http.createServer((req, res) => {

    if (req.url === "/") {
        fs.readFile("3.FileServer.html", (err, data) => {
            if (err) {
                res.writeHead(500, { "Content-Type": "text/plain" });
                res.end("File is not loading...");
            } else {
                res.writeHead(200, { "Content-Type": "text/html" });
                res.end(data);
            }
        });
    } else {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("Page not found");
    }
});

const port = 5050;
S
server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});