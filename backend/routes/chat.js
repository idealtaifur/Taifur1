const express = require('express');
const router = express.Router();
const axios = require('axios');

// Mock Database (replace with actual database implementation)
let chats = [];

// 1. Get chat history
router.get('/history', (req, res) => {
    res.json({ chats });
});

// 2. Send messages to Gemini API
router.post('/send', async (req, res) => {
    const { message } = req.body;

    try {
        const response = await axios.post('https://api.gemini.com/v1/message', { message });
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Error sending message to Gemini' });
    }
});

// 3. Create new chats
router.post('/new', (req, res) => {
    const newChat = {
        id: chats.length + 1,
        messages: []
    };
    chats.push(newChat);
    res.status(201).json(newChat);
});

module.exports = router;