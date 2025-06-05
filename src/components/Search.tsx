import { BsSearch } from "react-icons/bs";

const Search = () => {
  return (
    <div className=" bg-blue-900 flex flex-col items-center justify-center gap-4 p-4">
      <h2 className="">Busque por usuário</h2>
      <p className="">Conheça seus melhores repositórios</p>
      <div className="flex items-center gap-2 bg-white p-2 rounded-lg">
        <BsSearch className="text-gray-500" />
        <input
          type="text"
          placeholder="Digite seu nome de usuário"
          className=""
        />
        <button className="px-4 py-2 rouded rouded text-black">
          Pesquisar
        </button>
      </div>
    </div>
  );
};

export default Search;
