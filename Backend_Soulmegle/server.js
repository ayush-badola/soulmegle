const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../Frontend_Soulmegle/dist')));
const moodResponses = {
  Happy: "That's wonderful! Keep smiling and spreading joy. 😊",
  Sad: "I'm here for you. It's okay to feel sad sometimes. 💙",
  Anxious: "Take a deep breath. You're stronger than your fears. 🌱",
  Angry: "Try to take a moment and breathe. You're not alone. 💛",
  Lonely: "You matter. Even when it feels like no one's there, you’re not truly alone. 🤍"
};

app.post('/api/mood', (req, res) => {
  const { mood } = req.body;
  const message = moodResponses[mood] || "I'm here to support you.";
  res.json({ message });
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../Frontend_Soulmegle/dist/index.html'));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
