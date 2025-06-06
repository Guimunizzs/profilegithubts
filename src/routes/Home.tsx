import { useState } from "react";
import { type UserProps } from "../types/user";

// components
import User from "../components/User";
import Search from "../components/Search";

const Home = () => {
  const [user, setUser] = useState<UserProps | null>(null);

  const loadUser = async (username: string) => {
    const res = await fetch(`https://api.github.com/users/${username}`);

    const data = await res.json();

    console.log(data);

    const { avatar_url, login, location, followers, following } = data;

    const userData: UserProps = {
      avatar_url,
      login,
      location,
      followers,
      following,
    };
    ("");

    setUser(userData);
  };

  return (
    <div>
      <Search loadUser={loadUser} />
      {user && <User {...user} />}
    </div>
  );
};

export default Home;
