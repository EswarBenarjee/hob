import React, { useEffect, useState } from "react";
import "../styles/css/EmojiRain.css";

const EmojiRain = () => {
  const emojis = [
    "🎨",
    "🖌️",
    "🖼️",
    "🧑‍🎨",
    "🖊️",
    "🎵",
    "🎸",
    "🎤",
    "🎻",
    "🥁",
    "⚽",
    "🏀",
    "🏈",
    "🎾",
    "🏓",
    "🎮",
    "🕹️",
    "👾",
    "🎲",
    "♟️",
    "🍳",
    "🥘",
    "🍕",
    "🍰",
    "🧁",
    "📚",
    "📖",
    "🔖",
    "📜",
    "🧐",
  ];
  const [lastTenPositions, setLastTenPositions] = useState([]);

  const [emojiArray, setEmojiArray] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      let left = Math.random() * 100 + "vw";
      while (lastTenPositions.includes(left)) {
        left = Math.random() * 100 + "vw";
      }

      setLastTenPositions((prev) => [...prev, left].slice(-10));
      if (lastTenPositions.length > 10) {
        setLastTenPositions((prev) => prev.splice(1));
      }

      setEmojiArray((prev) => [
        ...prev,
        {
          id: Math.random(),
          emoji: emojis[Math.floor(Math.random() * emojis.length)],
          left: left,
          animationDuration: "5s",
        },
      ]);
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="emoji-rain-container">
      {emojiArray.map(({ id, emoji, left, animationDuration }) => (
        <span key={id} className="emoji" style={{ left, animationDuration }}>
          {emoji}
        </span>
      ))}
    </div>
  );
};

export default EmojiRain;
