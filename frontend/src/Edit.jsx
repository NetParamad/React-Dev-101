import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
function Edit() {
  const BASE_URL = "https://65d444943f1ab8c63434c1d3.mockapi.io/api/todo";

  const { id } = useParams();
  const [user, setUser] = useState({
    name: "",
  });

  async function fetchUser(id) {
    try {
      const response = await axios.get(`${BASE_URL}/users/${id}`);
      setUser(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchUser(id);
  }, [id]);

  function handleNameChange(e) {
    setUser((prev) => ({ ...prev, name: e.target.value }));
  }
  async function updateUser() {
    try {
      await axios.put(`${BASE_URL}/users/${id}`, {
        name: user.name,
      });
      alert("User Updated Successfull");
      window.location.href = "/";
    } catch(error) {
      console.log(error);
    }
  }
  return (
    <>
      <div>Edit</div>
      <div>User ID : {id}</div>
      <div>User Name : {user.name}</div>
      <div>
        Change Name :{" "}
        <input type="text" value={user.name} onChange={handleNameChange} />
      </div>
      <button onClick={() => updateUser()}>Save</button>
    </>
  );
}
export default Edit;
