import http from "http";
import fs from "fs";

// const port = 4000;

// const server = http.createServer((req, res) => {
//   fs.readFile("standarLibrary/page.html", (err, data) => {
//     if (err) {
//       res.writeHead(500, { "Content-Type": "text/plain" });
//       res.end("Error reading the file 😓");
//       return;
//     }

//     res.writeHead(200, { "Content-Type": "text/html" });
//     res.end(data); // ✅ Usamos res.end directamente
//   });
// });

// server.listen(port, () => {
//   console.log(`Server running 🚀 at http://localhost:${port}/`);
// });

//Replace
fs.writeFile("mushroomList.txt", "Este es el nuevo texto", (err) => {
    if (err) throw err;
    console.log("Saved!");
});

//Update
fs.appendFile("mushrosomList.txt", "Champignon", (err) => {
  if (err) throw err;
  console.log("Saved!");
});

//Update
fs.appendFile("mushroomList.txt", ", Shiitake", (err) => {
  if (err) throw err;
  console.log("Updated!");
});

//Replaced
fs.writeFile("mushroomList.txt", "Enoki, Chanterelle", (err) => {
  if (err) throw err;
  console.log("Replaced!");
});

//delete
fs.unlink("mushroomList.txt", (err) => {
  if (err) throw err;
  console.log("File deleted!");
});

//rename
fs.rename("mushroomList.txt", "fungusList.txt", (err) => {
  if (err) throw err;
  console.log("File Renamed!");
});