const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3001;

app.use(bodyParser.json());

app.post('/api/chat', (req, res) => {
    const userMessage = req.body.message;

    // Simple response logic (You can replace this with actual AI logic)
    const botResponse = `You said: ${userMessage}`;

    res.json({ response: botResponse });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
