import { useEffect, useState } from "react";
import GuestBeast from "../../components/UserCase/GuestBeast";
import RealBeast from "../../components/UserCase/RealBeast";
const User = () => {
  const [whoseUser, setWhoseUser] = useState({});
  useEffect(() => {
    JSON.parse(localStorage.getItem("userDetails"))
      ? setWhoseUser(JSON.parse(localStorage.getItem("userDetails"))[0])
      : setWhoseUser({ firstName: "Beast" });
  }, []);
  return (
    <>{whoseUser.firstName === "Beast" ? <GuestBeast /> : <RealBeast />}</>
  );
};

export default User;
