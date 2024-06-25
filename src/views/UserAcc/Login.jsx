import { useEffect, useState } from "react";
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
  const [error , setError] = useState('')
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
        navigate(`/user/${theGettedUser.firstName}${theGettedUser.lastName}`);
        dispatch(getUser(theGettedUser));
      }
    } else {
      setError('Incorrect Email or Password')
    }
  };
  return (
    // emily.johnson@x.dummyjson.com
    // emilyspass
    <section className="px-8 py-20">
      <form
        onSubmit={(e) => {
          submitData();
          e.preventDefault();
        }}
        className="w-[50%] mx-auto my-1/2 register relative mob:w-full"
      >
        {
          error ? <p className="text-red-600">{error}</p> : null
        }
        <input
          type="text"
          placeholder="Email Address"
          autoComplete="true"
          className="accountinput"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          autoComplete="true"
          placeholder="Password"
          className="accountinput mt-2"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <div>
          <button
            className="w-1/2 bg-blue-800 absolute bottom-3 rounded-lg py-1 tracking-wide"
            onClick={() => navigate(`/register`)}
          >
            Create Account
          </button>
          <button type="submit" className="createAccountBtn w-1/3 tracking-wide">
            Submit
          </button>
        </div>
      </form>
    </section>
  );
};

export default UserAcc;
