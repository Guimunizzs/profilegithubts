import { type UserProps } from "../types/user";
import { MdLocationPin } from "react-icons/md";

import { Link } from "react-router-dom";

const User = ({
  login,
  avatar_url,
  followers,
  following,
  location,
}: UserProps) => {
  return (
    <div className="bg-slate-600 flex flex-col items-center justify-center mb-4 gap-4 p-8 rounded-lg">
      <img
        src={avatar_url}
        alt={login}
        className="w-24 h-24 rounded-full border-2 border-slate-500"
      />
      <h2 className="text-xl font-bold">{login}</h2>
      <p className="text-gray-400">
        <MdLocationPin className="inline-block mr-1 " />
        <span>{location}</span>
      </p>
      <div className="flex gap-4 mt-4">
        <div className="text-center">
          <p>Seguidores</p>
          <p className="bg-blue-400 rounded-lg my-4">{followers}</p>
        </div>
        <div className="text-center">
          <p>Seguindo</p>
          <p className="bg-blue-400 rounded-lg my-4">{following}</p>
        </div>
      </div>
      <Link
        to={`/${login}/projects`}
        state={{ username: login }}
        className="bg-slate-800 px-4 py-2 rounded-lg text-white cursor-pointer hover:bg-slate-700 transition-colors duration-300"
      >
        Ver melhores projetos
      </Link>
    </div>
  );
};

export default User;
