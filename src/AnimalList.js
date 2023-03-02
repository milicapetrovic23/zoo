import React, { useState } from "react";
function AnimalList() {
  const heading = ["Species", "Name", "Year of birth"]
  let list = [
    {
      species: "Giant panda",
      name: "Little",
      yearOfBirth: new Date(),
    },
    {
      species: "Chimpanzee",
      name: "Marcell",
      yearOfBirth: new Date(),
    },
    {
      species: "Red panda",
      name: "Tony",
      yearOfBirth: new Date(),
    },
    {
      species: "Penguin",
      name: "Olly",
    },
    {
      species: "Lion",
      name: "Queen",
      yearOfBirth: new Date(),
    },
  ];

  const [animals, setAnimals] = useState(list);

  return (
    <div>
      <h2>Animals</h2>
      <table>
        <tr>
          {heading.map((column) => 
          <th>{column}</th>
          )}
        </tr>
        {animals.map((animal, index) => (
          <tr>
            <td>{animal.species}</td>
            <td>{animal.name}</td>

            {animal.hasOwnProperty("yearOfBirth") ? (
              <td>{animal.yearOfBirth.getFullYear()}</td>
            ) : (
              <td>Unknown</td>
            )}
            <td>
              <button onClick={() => setAnimals(animals.filter((a, i) => i !== index))}>Remove animal</button>
            </td>
            <td>
              <button onClick={() => setAnimals([...animals.splice(index, 1), ...animals])}>Move to top</button>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}
export default AnimalList;
