import React, { useState } from "react";
import "./styles.css";
// var userName = prompt("Enter your name")
var emojiMeanings = {
  "😀": "Grining face",
  "😉": "Winking face",
  "😠": "Angry face",
  "💋": "Kiss",
  "😗": "Kissing face",
  "🤑": "Money mouth face",
  "😐": "Neutral face",
  "❤️": "Love",
  "💀": "Skull",
  "👽": "Alien",
  "🤖": "Robot",
  "👌": "Ok hand",
  "🙏": "Folded hands"
};

var emojiList = Object.keys(emojiMeanings);
// console.log(emojiList)

export default function App() {
  const [meanings, setMeanings] = useState("");

  function emojiInputHandler(event) {
    var userInputEmoji = event.target.value;
    var meanings = emojiMeanings[userInputEmoji];

    if (meanings === undefined) {
      meanings = "We don't have this emoji in our data base";
    }
    setMeanings(meanings);
  }
  function emojiListHandler(emoji) {
    var meanings = emojiMeanings[emoji];
    setMeanings(meanings);
  }
  return (
    <>
      <div className="container">
        <div className="emoji-container">
          <h1 className="heading">Know emoji emotions</h1>
          <p className="subheading"> Enter your faviourt emoji</p>

          <input
            placeholder="Enter your favourite emoji"
            onChange={emojiInputHandler}
          />
          <h1 className="message"> {meanings} </h1>

          <div className="list_container">
            <h4 className="list">Our emojis</h4>

            {emojiList.map((emoji) => {
              return (
                <span
                  onClick={() => emojiListHandler(emoji)}
                  style={{
                    fontSize: "1.3rem",
                    padding: "0.5rem",
                    cursor: "pointer"
                  }}
                  key={emoji}
                >
                  {emoji}
                </span>
              );
            })}
          </div>
        </div>
        <footer>
          <ul>
            <li>
              <a
                href="https://neogcamp-portfolio-of-pritam.netlify.app/index.html"
                target="_blank"
                rel="noreferrer"
              >
                <i class="fas fa-globe-asia"></i>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/pritam-kr/emoji-emotions"
                target="_blank"
                rel="noreferrer"
              >
                <i class="fab fa-github"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/pritam_kr30/"
                target="_blank"
                rel="noreferrer"
              >
                <i class="fab fa-instagram"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/pritam-kumar-0ab3431bb/"
                target="_blank"
                rel="noreferrer"
              >
                <i class="fab fa-linkedin-in"></i>
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/Pritamkr_"
                target="_blank"
                rel="noreferrer"
              >
                <i class="fab fa-twitter"></i>
              </a>
            </li>
          </ul>
        </footer>
      </div>
    </>
  );
}
