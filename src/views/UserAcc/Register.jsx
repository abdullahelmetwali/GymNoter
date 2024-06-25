import { useState } from "react";
import { useDispatch } from "react-redux";
import { getUser } from "../../store/storeSlices/userSlice";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const emailRegex = /^([a-zA-Z0-9._-]+@(gmail|icloud|yahoo).com)/gim;
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [gender, setGender] = useState("");
  const addUser = () => {
    fetch('https://dummyjson.com/users/add', {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: `${firstName} ${lastName}`,
        firstName: firstName,
        lastName: lastName,
        email: emailRegex.test(email)
          ? email
          : setEmailError("Enter Valid Email"),
        password:
          password.length < 9
            ? setPasswordError("MORE THAN 8 letters")
            : password,
        gender: gender ,
        avatar: "https://api.escuelajs.co/api/v1/users/avatar",
      }),
    })
      .then((res) => res.json())
      .then(res => {
        dispatch(getUser(res)) ,
        navigate(`/exercises/allexercises`) ,
        location.reload()
      })
      
  };

  return (
    <section className="  px-8 py-20">
      <form
        className="w-[74%] mx-auto my-1/2 register relative mob:w-full"
        onSubmit={(e) => {
          addUser(), e.preventDefault();
        }}
      >
        <div className="flex justify-center w-auto gap-6">
          <div className="w-full">
            <label htmlFor="firstName" className="text-red-600 ml-1 font-thin text-sm">
              *
            </label>
            <input
              type="text"
              placeholder="First Name"
              id="firstName"
              name="firstName"
              className="accountinput"
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>
          <div className="w-full">
            <label htmlFor="lastName"className="text-red-600 ml-1 font-thin text-sm">
              *
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Last Name"
              className="accountinput"
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="w-auto gap-6 my-2">
          <div className="w-full">
            <label htmlFor="email" className="text-red-600 ml-1 font-thin text-sm">
              {emailError ? (
                <p>{emailError}</p>
              ) : (
                <span>*</span>
              )}
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              className="accountinput"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="w-full">
            <label htmlFor="password" className="text-red-600 ml-1 font-thin text-sm">
              {passwordError ? (
                <p>
                  {passwordError}
                </p>
              ) : (
                <span>*</span>
              )}
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              // pattern=".{9,}" can also be used
              className="accountinput"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
        </div>
        <div>
        <select
          className="accountinput cursor-pointer"
          name="gender"
          id="gender"
          defaultValue={'0'}
          onChange={(e) => setGender(e.target.value)}
          required
        >
          <option value="0" disabled>
            Select Gender
          </option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        </div>
        <button type="submit" className="createAccountBtn">
          Create Account
        </button>
      </form>
    </section>
  );
};
export default Register;
