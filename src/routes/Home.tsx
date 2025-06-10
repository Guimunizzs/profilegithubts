import { useState } from "react";
import { type UserProps } from "../types/user";

// components
import User from "../components/User";
import Search from "../components/Search";
import Error from "../components/Error";
import Loading from "../components/Loading";

const Home = () => {
  const [user, setUser] = useState<UserProps | null>(null);
  const [error, setError] = useState<boolean | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const loadUser = async (username: string) => {
    setError(false);
    setUser(null);
    setLoading(true);

    try {
      const res = await fetch(`https://api.github.com/users/${username}`);

      const data = await res.json();

      if (res.status === 404) {
        setError(true);
        setUser(null);
        return;
      }

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
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center my-8">
      <Search loadUser={loadUser} />
      {loading && <Loading />}
      {user && !loading && <User {...user} />}
      {error && !loading && <Error />}
    </div>
  );
};

export default Home;
