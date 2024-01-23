import { useEffect, useState } from "react";

const App = () => {
  const [text, setText] = useState("");
  const [author, setAuthor] = useState("");

  const getQuotes = async () => {
    const response = await fetch("https://type.fit/api/quotes");
    const data = await response.json();
    const newText = data[Math.floor(Math.random() * data.length)];
    setText(newText.text);
    setAuthor(newText.author);
  };

  useEffect(() => {
    getQuotes();
  }, []);

  const handleClick = () => {
    getQuotes();
  };

  return (
    <>
      <div>
        <div>
          <i>{`" `}</i>
          <span>{text}</span>
        </div>
        <div>{author}</div>
        <div>
          <button>twitter</button>
          <button onClick={handleClick}>next</button>
        </div>
      </div>
    </>
  );
};
export default App;
