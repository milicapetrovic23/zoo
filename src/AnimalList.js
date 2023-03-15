import React, { useState } from "react";
function AnimalList() {
  const heading = ["Species", "Name", "Year of birth", "What they eat"]
  let list = [
    {
      species: "Giant panda",
      name: "Little",
      yearOfBirth: 2010,
      eatingHabits: 1
    },
    {
      species: "Chimpanzee",
      name: "Marcell",
      yearOfBirth: 2011,
      eatingHabits: 2
    },
    {
      species: "Red panda",
      name: "Tony",
      yearOfBirth: 2015,
      eatingHabits: 0
    },
    {
      species: "Penguin",
      name: "Olly",
      eatingHabits: 2
    },
    {
      species: "Lion",
      name: "Queen",
      yearOfBirth: 2000,
      eatingHabits: 1
    },
  ];

  const [animals, setAnimals] = useState(list);

 const [newAnimal, setNewAnimal] = useState({
  species: "",
  name: "",
  yearOfBirth: "",
  eatingHabits: ""
 })

 const handleSpeciesChange = e => {
  setNewAnimal({ ...newAnimal, species: e.target.value});
 }

 const handleNameChange = e => {
  setNewAnimal({ ...newAnimal, name: e.target.value});
 }

 const handleYearOfBirthChange = e => {
  setNewAnimal({ ...newAnimal, yearOfBirth: e.target.value});
 }

 const handleWhatTheyEatChange = e => {
   setNewAnimal({ ...newAnimal, eatingHabits: e.target.value});
  }

  const handleSubmit = e => {
    e.preventDefault();
    setAnimals([...animals, newAnimal]);
    setNewAnimal({
      species: "",
      name: "",
      yearOfBirth: "",
      eatingHabits: ""
     })
  }

  const eatingHabits = ["herbivores", "carnivores", "omnivore"];

  const whatTheyEat = (id) => eatingHabits.find((habit, index) => index === id)

  const showAnimals = (id) => {
    const showThese = (animals.filter((animal) => animal.eatingHabits === id))
    alert(JSON.stringify(showThese))
  }

  return (
    <div>
      <h2>Add New Animal</h2>

      <form onSubmit={handleSubmit}>
        <label>Species:</label>
        <input type="text" value={newAnimal.species} onChange={handleSpeciesChange}></input>
        <label >Name:</label>
        <input type="text" value={newAnimal.name} onChange={handleNameChange}></input>
        <label>Year of birth:</label>
        <input type="number" value={newAnimal.yearOfBirth} onChange={handleYearOfBirthChange}></input>
        <label htmlFor="eating">What they eat:</label>
        <select id="eating" value={newAnimal.eatingHabits} onChange={handleWhatTheyEatChange}>
          <option hidden>Choose here</option>
          {eatingHabits.map((habit, index) =>
            <option key={index} value={index}>{habit}</option>
          )}
        </select>
        <button>Submit</button>
      </form>


      <h2>Animals</h2>

      <table>
        <thead>
          <tr>
          {heading.map((column, index) => 
          <th key={index}>{column}</th>
          )}
          </tr>
        </thead>
        <tbody>
        {animals.map((animal, index) => (
          <tr key={index}>
            <td>{animal.species}</td>
            <td>{animal.name}</td>

            {animal.hasOwnProperty("yearOfBirth") ? (
              <td>{animal.yearOfBirth}</td>
            ) : (
              <td>Unknown</td>
            )}
            <td>{whatTheyEat(animal.eatingHabits)}</td>
            <td>
              <button onClick={() => setAnimals(animals.filter((a, i) => i !== index))}>Remove animal</button>
            </td>
            <td>
              <button onClick={() => setAnimals([...animals.splice(index, 1), ...animals])}>Move to top</button>
            </td>
          </tr>
        ))}
        </tbody>
      </table>
      
      <table>
        <tbody>
        {eatingHabits.map((habit, index)=>(
          <tr key={index}>
            <th>{habit}</th>
            <td><button onClick={()=>showAnimals(index)}>Check animals</button></td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  );
}
export default AnimalList;
