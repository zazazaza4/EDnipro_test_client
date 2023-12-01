const ProjectItem = ({ project }) => {
  return (
    <div className="bg-white p-4 rounded shadow">
      <h3 className="text-lg font-semibold mb-2">{project.name}</h3>
      <p>{project.description}</p>
    </div>
  );
};

export { ProjectItem };
