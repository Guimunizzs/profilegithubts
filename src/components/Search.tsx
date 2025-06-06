import { BsSearch } from "react-icons/bs";
import { useState } from "react";

type SearchProps = {
  loadUser: (username: string) => Promise<void>;
};

const Search = ({ loadUser }: SearchProps) => {
  const [username, setUsername] = useState("");

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      loadUser(username);
    }
  };

  return (
    <div className=" bg-slate-600 flex flex-col items-center justify-center mb-4 gap-4 p-8 rounded-lg">
      <h2 className="">Busque por usuário</h2>
      <p className="text-gray-400">Conheça seus melhores repositórios</p>
      <div className="flex items-center gap-2 border-none  text-slate-500 p-2 rounded-lg">
        <input
          type="text"
          placeholder="Digite seu nome de usuário"
          className="bg-white px-4 py-2 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-slate-500 transition-colors duration-300"
          onChange={(e) => setUsername(e.target.value)}
          onKeyDown={handleKeyDown}
          value={username}
        />
        <button
          className="bg-slate-800 px-4 py-2 rounded-lg text-white cursor-pointer hover:bg-slate-700 transition-colors duration-300"
          onClick={() => loadUser(username)}
        >
          <BsSearch className="inline-block " />
        </button>
      </div>
    </div>
  );
};

export default Search;
