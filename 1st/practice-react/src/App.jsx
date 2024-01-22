import { useEffect, useState } from "react";

const App = () => {
  const [newData, setNewData] = useState();

  useEffect(() => {
    const getQuotes = async () => {
      const response = await fetch("https://type.fit/api/quotes");
      const data = await response.json();
      setNewData(data);
    };
    getQuotes();
  }, []);
  console.log(newData);
  return (
    <>
      <div>
        <div>
          <i>{`" `}</i>
          <span>Some quote</span>
        </div>
        <div>author</div>

        <div>
          <button>twitter</button>
          <button>next</button>
        </div>
      </div>
    </>
  );
};
export default App;
