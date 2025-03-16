const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Set the path to the directory where your HTML files reside
const publicDirectoryPath = path.join(__dirname, 'public_pages');

//const db = require('./db/queries');

console.log('Initializaing');

async function getUsernames(req, res) {
  console.log("Fetching...");
  const usernames = await db.getAllUsernames();
  console.log("Usernames: ", usernames);
  res.send("Usernames: " + usernames.map(user => user.username).join(", "));
}

async function createUsernameGet(req, res) {
  // render the form
}

async function createUsernamePost(req, res) {
  const { username } = req.body;
  await db.insertUsername(username);
  res.redirect("/");
}

// Using static serve blocks logging somehow
app.use('/', (req, res, next) => {
    console.log("A new request received at " + Date.now());
    next();
 });

// Routes for different HTML pages
app.get('/', (req, res) => {
    console.log('get /');
    res.sendFile(path.join(publicDirectoryPath, 'index.html'));
});

app.get('/new', (req, res) => {
    console.log('get /new');
    res.sendFile(path.join(publicDirectoryPath, 'new.html'));
});

app.post('/new', (req, res) => {
    console.log("username to be saved: ", req.body.username);
    res.sendFile(path.join(publicDirectoryPath, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});