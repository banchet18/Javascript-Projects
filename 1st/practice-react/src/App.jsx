import { useEffect, useState } from "react";

const App = () => {
  const [newData, setNewData] = useState("");

  useEffect(() => {
    getQuotes();
  }, []);
  const getQuotes = async () => {
    const response = await fetch("https://type.fit/api/quotes");
    const arrayData = await response.json();
    const data = arrayData[Math.floor(Math.random() * arrayData.length)];
    setNewData(data);
  };

  return (
    <>
      <div>
        <div>
          <i>{`" `}</i>
          <span>{newData.text}</span>
        </div>
        <div>{newData.author}</div>

        <div>
          <button>twitter</button>
          <button onClick={() => getQuotes}>next</button>
        </div>
      </div>
    </>
  );
};
export default App;
