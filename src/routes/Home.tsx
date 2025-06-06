import { useState } from "react";
import { type UserProps } from "../types/user";

// components
import User from "../components/User";
import Search from "../components/Search";
import Error from "../components/Error";

const Home = () => {
  const [user, setUser] = useState<UserProps | null>(null);
  const [error, setError] = useState<boolean | null>(null);

  const loadUser = async (username: string) => {
    setError(false);
    setUser(null);

    const res = await fetch(`https://api.github.com/users/${username}`);

    const data = await res.json();

    if (res.status === 404) {
      setError(true);
      setUser(null);
      return;
    }

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
      {error && <Error />}
    </div>
  );
};

export default Home;
