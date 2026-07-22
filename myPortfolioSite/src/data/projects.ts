export interface Project {
  name: string;
  description: string;
  image: string;
  githubUrl: string;
}

export const projects: Project[] = [
  {
    name: "My Portfolio Site",
    description: "A React + TypeScript site built with Vite.",
    image: "/assets/portfolio-thumbnail.png",
    githubUrl: "https://github.com/NahiyanKhandaker/myPortfolioSite",
  },
];