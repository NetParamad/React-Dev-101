import Header from "./components/Header";
import Footer from "./components/Footer";
import { InconOne, InconTwo } from "./components/Icon";
import Image from "./components/Image";
import Chackbox from "./components/Chackbox";


import { useState, useEffect } from "react";

import Video from "./components/Video";

import axios from "axios";

import { Link } from "react-router-dom";

function App() {
  const todoList = [
    {
      text: "Learn React",
      isChecked: false,
    },
    {
      text: "Code React",
      isChecked: true,
    },
  ];

  const [counter, setCount] = useState(0);
  function countUp() {
    setCount(counter + 1);
  }
  const [isPlaying, setIsPlaying] = useState(false);
  function togglePlay() {
    setIsPlaying(!isPlaying);
  }

  const [users, setUsers] = useState([]);
  const  [isLoading, setIsLoading] = useState(true);
  const BASE_URL = "https://66bc5ef724da2de7ff6a3c79.mockapi.io";

  async function fetchUser() {
    try {
      const response = await axios.get(`${BASE_URL}/users`);
      setUsers(response.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  async function deleteUser(id) {
    try {
      setIsLoading(true);
      await axios.delete(`${BASE_URL}/users/${id}`);
      await fetchUser();
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <>
      <Header />
      <InconOne />
      <div className="">Hello World</div>
      <InconTwo />
      <Image imageUrl={"https://picsum.photos/200/300"} />
      {todoList.map((todo, index) => (
        <Chackbox key={index} text={todo.text} isChecked={todo.isChecked} />
      ))}
      <div>
        Count: {counter} <button onClick={countUp}>Count Up</button>
      </div>

      <Video
        isPlaying={isPlaying}
        src={
          "https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
        }
      />
      <button onClick={togglePlay}>{isPlaying ? "Stop" : "Play"}</button>

      {isLoading && <div>Loading...</div>}
      {!isLoading && (
        <div>
          {users.map((user, index) => (
            <div key={index}>
              {user.id}
              {user.name}{" "}
              <button
                onClick={async () => {
                  await deleteUser(user.id);
                }}
              >
                Delete
              </button>{" "}
              <Link to={`/user/${user.id}`}>
                <button>Edit</button>
              </Link>
            </div>
          ))}
        </div>
      )}
      <Footer />
    </>
  );
}

export default App;
