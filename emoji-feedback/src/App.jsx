import { useState } from "react";
import "./App.css";
import FeedBackList from "./FeedBackList/FeedBackList";
import SelectedFeedBackDisplay from "./SelectedFeedBackDisplay/SelectedFeedBackDisplay";
import ResetFeedBackButton from "./ResetFeedBackButton/ResetFeedBackButton";

function App() {
  const emojiList = [
    { id: 1, code: "😊", text: "Happy" },
    { id: 2, code: "😂", text: "Laughing" },
    { id: 3, code: "😐", text: "Eh..." },
    { id: 4, code: "😉", text: "Wink" },
    { id: 5, code: "😈", text: "Be the devil" },
    { id: 6, code: "🙈", text: "Monkey" },
    { id: 7, code: "💀", text: "Dead man" },
    { id: 8, code: "👌", text: "Ou yeahhhh come onnnn" },
  ];

  const [selectedFeedBack, setSelectedFeedBack] = useState(null);

  const handleFeedBackSelect = (feedBack) => {
    setSelectedFeedBack(feedBack);
  };

  return (
    <>
      <h1 className="emojiFeedBack">Emoji Feedback</h1>
      <FeedBackList emojis={emojiList} onFeedBackSelect={handleFeedBackSelect} />
      {selectedFeedBack && (
        <SelectedFeedBackDisplay feedback={selectedFeedBack} />
      )}
      <ResetFeedBackButton onClick={() => setSelectedFeedBack(null)}></ResetFeedBackButton>
    </>
  );
}

export default App;

