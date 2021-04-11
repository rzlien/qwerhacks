// src/components/ComposeTweet.js
import {useState} from 'react';

function ComposeTweet(props){
    const [text, setText] = useState("");
    const handleInput = (e) => {
        setText(e.target.value);
    }
    const composeTweet = () => {
        props.createTweet(text); //props.createTweet is a function from App.js
        setText("");

    }
    return (
        <div>
            <p>Write your own tweet</p>
            <input type="text" onChange={handleInput} value={text}/>
            <button onClick={composeTweet}>create</button>
        </div>
    )
}

export default ComposeTweet;