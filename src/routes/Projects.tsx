import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Loading from "../components/Loading";

type Repository = {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
};

const Projects = () => {
  const { username } = useParams<{ username: string }>();
  const [projects, setProjects] = useState<Repository[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/users/${username}/repos?sort=created&direction=desc`
        );
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, [username]);

  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Projetos de {username}</h2>
      <Link
        to={`/`}
        className="text-blue-500 hover:underline mb-4 inline-block"
      >
        Voltar para Home
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-slate-600 p-4 rounded-lg hover:bg-slate-700 transition-colors"
          >
            <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
            <p className="text-gray-300 mb-2">
              {project.description || "Sem descrição"}
            </p>
            <p className="text-gray-400 mb-2">
              Linguagem: {project.language || "Não especificada"}
            </p>
            <p className="text-gray-400 mb-2">
              Estrelas: {project.stargazers_count} | Forks:{" "}
              {project.forks_count}
            </p>
            <a
              href={project.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              Ver no GitHub
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
