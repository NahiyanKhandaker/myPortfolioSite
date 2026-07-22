import { projects } from "../data/projects";

const Project: React.FC = () => {

  return (

    <section className="projects">

      <h2 className="projects__title">My Projects</h2>

      <div className="projects__grid">

        {projects.map((project) => (
          <div className="projectCard" key={project.name}>

            <img
              className="projectCard__image"
              src={project.image}
              alt={project.name}
            />
            
            <h3 className="projectCard__name">{project.name}</h3>

            <p className="projectCard__description">{project.description}</p>

            <a href={project.githubUrl} target="_blank" rel="noreferrer">
              <button className="primaryButton">View on GitHub</button>
            </a>

          </div>
        ))}

      </div>

    </section>
  );
};

export default Project;