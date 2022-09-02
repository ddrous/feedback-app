import Header from "./components/header";
import FeedbackList from "./components/feedbackList";
import FeedbackData from "./data/feedbackData"
import { useState } from "react";

function App() {
    const [feedback, setfeedback] = useState(FeedbackData)

    return (
        <div className="container">
            <Header bgColor='gray' />
            <div> <FeedbackList feedback={feedback} /> </div>
        </div>
        );
}

export default App;