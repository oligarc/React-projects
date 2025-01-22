import "../App.css"
function SelectedFeedBackDisplay({ feedback }) {
    return (
      <div>
        <p className='emojiButton'>{feedback.code}</p>
        <p>Your feedback: {feedback.text}</p>
      </div>
    );
  }
  
  export default SelectedFeedBackDisplay;
  