import { useState } from "react";
import "./App.css";
import FeedBackList from "./FeedBackList/FeedBackList";
import SelectedFeedBackDisplay from "./SelectedFeedBackDisplay/SelectedFeedBackDisplay";

function App() {
  const emojiList = [
    { id: 1, code: "😊", text: "Happy" },
    { id: 2, code: "😂", text: "Laughing" },
    { id: 3, code: "😐", text: "Neutral" },
    { id: 4, code: "😉", text: "Wink" },
  ];

  const [selectedFeedBack, setSelectedFeedBack] = useState(null);

  const handleFeedBackSelect = (feedBack) => {
    setSelectedFeedBack(feedBack);
  };

  return (
    <>
      <h1>Emoji Feedback</h1>
      <FeedBackList emojis={emojiList} onFeedBackSelect={handleFeedBackSelect} />
      {selectedFeedBack && (
        <SelectedFeedBackDisplay feedback={selectedFeedBack} />
      )}
    </>
  );
}

export default App;

