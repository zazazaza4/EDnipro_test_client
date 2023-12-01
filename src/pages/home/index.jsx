// import { useEffect, useState } from 'react';

const Home = () => {
  //   const [projects, setProjects] = useState([]);
  //   const [filteredProjects, setFilteredProjects] = useState(projects);

  //   useEffect(() => {
  //     setFilteredProjects(projects);
  //   }, [projects]);

  //   const handleSearch = (searchTerm) => {
  //     const filtered = projects.filter((project) =>
  //       project.name.toLowerCase().includes(searchTerm.toLowerCase()),
  //     );
  //     setFilteredProjects(filtered);
  //   };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-semibold mb-4">Project List</h1>
      {/* <SearchBar onSearch={handleSearch} />
      <ProjectList projects={filteredProjects} /> */}
    </div>
  );
};

export default Home;
