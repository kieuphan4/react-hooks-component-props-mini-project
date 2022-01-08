import React from "react"

function emojiFromMinutes(min) {
    let emojis = ""; //begin with an empty string
    if (min < 30) {
        for (let i = 0; i < min; i += 5) { // for every 5 min interval, start interval at 0, increment by 5 
            emojis += "coffee"
        }
    } else {
        for (let i = 0; i < min; i += 10) {
            emojis += "bento"
        }
    }
    return emojis
}

function Article( { title, date = "January 1, 1970", preview, min }) {
    
    return (
        <article>
            <h3>{title}</h3>
            <small>{date} | {emojiFromMinutes(min)} {min} min read</small>
            <p>{preview}</p>
        </article>
    );
}

export default Article;