import React, { useState } from "react";
function AnimalList() {
  let list = [
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
    },
    {
      species: "Lion",
      name: "Queen",
      dateOfBirth: new Date(),
    },
  ];

  const [animals, setAnimals] = useState(list);

  const removeAnimal = (i) =>
    setAnimals(animals.filter((animal, index) => index !== i));

  return (
    <div>
      <h2>Animals:</h2>
      <table>
        <tr>
          <th>Species</th>
          <th>Name</th>
          <th>Date of birth</th>
        </tr>
        {animals.map((animal, index) => (
          <tr>
            <td>{animal.species}</td>
            <td>{animal.name}</td>

            {animal.hasOwnProperty("dateOfBirth") ? (
              <td>{animal.dateOfBirth.getFullYear()}</td>
            ) : (
              <td>Unknown</td>
            )}
            <td>
              <button onClick={removeAnimal(index)}>Remove animal</button>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}
export default AnimalList;
