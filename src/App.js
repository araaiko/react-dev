// import logo from './logo.svg';
// import './App.css';
// import Article from "./components/Article";
// import TextInput from "./components/TextInput";
// import Counter from "./components/Counter";
// import ToggleButton from "./components/ToggleButton";

import { useEffect, useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [id, setId] = useState("araaiko");
  const ids = ["araaiko", "gaearon", "aws", "google", "facebook"];
  const getRandomId = () => {
    const _id = ids[Math.floor(Math.random() * ids.length)];
    setId(_id);
  };

  useEffect(() => {
    fetch(`https://api.github.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setName(data.name);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  return (
    // <Article
    //   title={"これはタイトルです。"}
    //   text={`これはテストです。改行はどうすればいいんだ`}
    // />
    // <TextInput />
    // <TextInput />
    // <Counter></Counter>
    // <ToggleButton />
    <>
      <p>
        {id}の、GitHub上の名前は{name}です。
      </p>
      <button onClick={getRandomId}>ランダム表示ボタン</button>
    </>
  );
}

export default App;
