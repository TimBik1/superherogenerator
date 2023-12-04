require('dotenv').config();
const express = require('express');
const axios = require('axios');

const app = express();
const port = process.env.PORT || 3000;

// Body parser middleware to handle POST requests
app.use(express.json());

// Endpoint to generate a superhero profile
app.get('/generate-superhero', async (req, res) => {
    try {
        // Replace 'your_prompt_here' with the prompt you'd like to send to the OpenAI API
        const prompt = "Create a detailed superhero profile with unique abilities, background, and motivation.";

        // Making a POST request to OpenAI's API
        const response = await axios.post('https://api.openai.com/v1/engines/davinci-codex/completions', {
            prompt: prompt,
            max_tokens: 150
        }, {
            headers: {
                'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
                'Content-Type': 'application/json'
            }
        });

        // Sending the response back to the client
        res.json(response.data.choices[0].text);
    } catch (error) {
        console.error('Error generating superhero profile:', error);
        res.status(500).send('Error generating superhero profile');
    }
});

app.use(express.static('public'));


// Start the server
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});

