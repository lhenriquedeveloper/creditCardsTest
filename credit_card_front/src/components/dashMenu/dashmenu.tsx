import { SetStateAction, useState } from "react";
import Tableuser from "../tableUser/tableuser";

export default function Dashmenu() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="mx-auto max-w-[80%] p-8">
      <label className="input input-bordered flex items-center gap-2">
        <input
          type="text"
          className="grow placeholder:italic"
          placeholder="Digite o cliente que deseja buscar"
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="w-4 h-4 opacity-70"
        >
          <path
            fillRule="evenodd"
            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
            clipRule="evenodd"
          />
        </svg>
      </label>
      <div className="divider"></div>
      {/* Renderize a tabela de usuários (clientes) e passe o valor da busca como prop */}
      <Tableuser searchQuery={searchQuery} />
    </div>
  );
}
