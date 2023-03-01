function AnimalList() {
  const animals = [
    {
      species: "Giant panda",
      name: "Little",
      dateOfBirth: new Date(),
    },
    {
      species: "Chimpanzee",
      name: "Marcell",
      dateOfBirth: new Date(),
    },
    {
      species: "Red panda",
      name: "Tony",
      dateOfBirth: new Date(),
    },
    {
      species: "Penguin",
      name: "Olly",
      dateOfBirth: new Date(),
    },
    {
      species: "Lion",
      name: "Queen",
      dateOfBirth: new Date(),
    },
  ];

  return (
    <div>
      <h2>Animals:</h2>
      <table>
        <tr>
          <th>Species</th>
          <th>Name</th>
          <th>Date of birth</th>
        </tr>
        {animals.map((animal) => (
          <tr>
            <td>{animal.species}</td>
            <td>{animal.name}</td>
            <td>{animal.dateOfBirth.getFullYear()}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}
export default AnimalList;
