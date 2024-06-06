const express = require('express');
const bodyParser = require('body-parser');
const path = require('path'); // Include path module
const app = express();
const port = 3000; // You can change the port number if needed

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files (HTML, CSS, JS)
app.use(express.static(path.join(__dirname, 'public'))); // Corrected path

// Dummy user data
const users = [];

// Routes
app.post('/register', (req, res) => {
    const { name, email, password } = req.body;
    const userExists = users.find(user => user.email === email);
    
    if (userExists) {
        return res.status(400).json({ message: 'User already exists' });
    }
    
    users.push({ name, email, password });
    res.status(201).json({ message: 'User registered successfully' });
});

app.post('/login', (req, res) => {
    const { email, password } = req.body;
    const user = users.find(user => user.email === email && user.password === password);
    
    if (!user) {
        return res.status(400).json({ message: 'Invalid credentials' });
    }
    
    res.status(200).json({ message: 'Login successful' });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
