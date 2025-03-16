const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Set the path to the directory where your HTML files reside
const publicDirectoryPath = path.join(__dirname, 'public_pages');

// Serve static files from the public directory
app.use(express.static(publicDirectoryPath));

// Routes for different HTML pages
app.get('/', (req, res) => {
    console.log("usernames will be logged here - wip");
    res.sendFile(path.join(publicDirectoryPath, 'index.html'));
});

app.get('/new', (req, res) => {
    res.sendFile(path.join(publicDirectoryPath, 'new.html'));
});

app.post('/new', (req, res) => {
    console.log("username to be saved: ", req.body.username);
    res.sendFile(path.join(publicDirectoryPath, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});