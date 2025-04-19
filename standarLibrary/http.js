
import http from "http";
import url from "url";

const port = 4000;

const server = http.createServer((req, res) => {

    res.setHeader('Content-Type', 'text/html')

    const { query } = url.parse(req.url, true)

    const date = query.year + " " + query.month

    res.end(date);
})

server.listen(port, () => {
    console.log(`Server is running 🚀 on port ${port}`)
})

