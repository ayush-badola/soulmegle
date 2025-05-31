const express = require('express');
const cors = require('cors');
const path = require('path');


const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../Frontend_Soulmegle/dist')));
const moodResponses = {
  Happy: "Ah, I can feel your joy from here! Bottle this moment in your heart — it’s these little bursts of sunshine that make life so beautiful. Keep shining, you radiant soul. ✨",
  Sad: "Hey, it’s okay to crumble a little — even the sky has cloudy days. Just know I’m sitting beside you in the silence, holding space for whatever you need to feel. You're not broken, just human. 💙",
  Anxious: "Your heart’s racing and your thoughts feel like a storm, I know. But storms pass. Right now, just place your hand on your chest — that’s your heartbeat, and it’s rooting for you. Inhale calm, exhale worry. 🌾",
  Angry: "Anger often hides pain or passion — both are signs you care deeply. Step back for a moment, not to retreat, but to breathe and respond instead of react. I’m here with you, no judgment. 🔥➝🌼",
  Lonely: "Loneliness can echo loudly, but I want you to know: your existence makes ripples in ways you don’t always see. Someone out there is grateful for your smile, your thoughts, your being. You belong. 🤍"
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
