import { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getUser } from "../../store/storeSlices/userSlice";
const UserAcc = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const url = "https://dummyjson.com/users";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [users, setUsers] = useState();
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const getResponse = await fetch(url);
        const getData = await getResponse.json();
        setUsers(getData.users);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    fetchUser();
  }, [email, password]);
  const submitData = () => {
    if (email && password) {
      const theGettedUser = users.find(
        (user) => user.email === email && user.password === password
      );
      if (theGettedUser) {
        navigate(`/user/${theGettedUser.fisrtName}${theGettedUser.lastName}`);
        dispatch(getUser(theGettedUser));
      }
    } else {
      ("");
    }
  };
  return (
    // emily.johnson@x.dummyjson.com
    // emilyspass
    <>
      <form action="#" className="bg-black mx-10 grid gap-7">
        <input
          type="text"
          placeholder="email"
          autoComplete="true"
          className="bg-white w-1/2 px-3 text-black"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          autoComplete="true"
          placeholder="password"
          className="bg-white w-1/2 px-3 text-black"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button
          type="submit"
          className="px-7 py-1 bg-gray-700 w-1/2"
          onClick={(e) => {
            submitData();
            e.preventDefault();
          }}
        >
          submit
        </button>
      </form>
    </>
  );
};

export default UserAcc;
