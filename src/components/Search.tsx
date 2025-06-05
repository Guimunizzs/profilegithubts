import { BsSearch } from "react-icons/bs";
import { useState } from "react";

type SearchProps = {
  loadUser: (username: string) => Promise<void>;
};

const Search = ({ loadUser }: SearchProps) => {
  const [username, setUsername] = useState("");
  return (
    <div className=" bg-blue-900 flex flex-col items-center justify-center gap-4 p-4">
      <h2 className="">Busque por usuário</h2>
      <p className="">Conheça seus melhores repositórios</p>
      <div className="flex items-center gap-2 bg-white p-2 rounded-lg">
        <input
          type="text"
          placeholder="Digite seu nome de usuário"
          className=""
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />
        <button
          className="px-4 py-2 rouded rouded text-black"
          onClick={() => loadUser(username)}
        >
          <BsSearch className="inline-block mr-2" />
        </button>
      </div>
    </div>
  );
};

export default Search;
