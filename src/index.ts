import os from "os";
import express from "express";

const remoteIps = Object.values(os.networkInterfaces()) 
  .reduce((every: os.NetworkInterfaceInfo[], i) => [...every, ...(i || [])], []) 
  .filter((i) => i.family === 'IPv4' && i.internal === false) 
  .map((i) => i.address); 
  
console.log("Remote IPs:", remoteIps);

console.log("Booting up express server...");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
})
