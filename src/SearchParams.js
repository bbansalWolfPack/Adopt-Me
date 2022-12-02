import { useContext, useState } from "react";

import { Results } from "./Results";
import ThemeContext from "./ThemeContext";

import { useBreedList } from "./useBreedList";

const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];

export const SearchParams = () => {
  const [location, setLocation] = useState("");

  const [selectedAnimal, setSelectedAnimal] = useState("");

  const [selectedBreed, setSelectedBreed] = useState("");

  const [pets, setPets] = useState([]);

  const handleChange = (event) => {
    setLocation(event.target.value);
  };

  const [breeds] = useBreedList(selectedAnimal);

  const requestPets = async () => {
    const response = await fetch(
      `http://pets-v2.dev-apis.com/pets?animal=${selectedAnimal}&location=${location}&breed=${selectedBreed}`
    );

    const json = await response.json();

    setPets(json.pets);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    requestPets();
  };

  const [theme, setTheme] = useContext(ThemeContext);

  return (
    <div className="search-params">
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="location">
          Location
          <input
            id="location"
            value={location}
            placeholder="Enter Location"
            onChange={handleChange}
          />
        </label>

        <label htmlFor="animal">
          Animal
          <select
            id="animal"
            value={selectedAnimal}
            onChange={(e) => {
              setSelectedAnimal(e.target.value);
              setSelectedBreed("");
            }}
            onBlur={(e) => {
              setSelectedAnimal(e.target.value);
              setSelectedBreed("");
            }}
          >
            <option />
            {ANIMALS.map((animal) => (
              <option key={animal} value={animal}>
                {animal}
              </option>
            ))}
          </select>
        </label>

        <label htmlFor="breed">
          Breed
          <select
            disabled={!breeds.length}
            id="breed"
            value={selectedBreed}
            onChange={(e) => setSelectedBreed(e.target.value)}
            onBlur={(e) => setSelectedBreed(e.target.value)}
          >
            <option />
            {breeds.map((breed) => (
              <option key={breed} value={breed}>
                {breed}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="theme">
          Theme
          <select
            value={theme}
            onChange={(e) => setTheme(e.target.value)}
            onBlur={(e) => setTheme(e.target.value)}
          >
            <option value="peru">Peru</option>
            <option value="darkblue">Dark Blue</option>
            <option value="chartreuse">Chartreuse</option>
            <option value="mediumorchid">MediumOrchid</option>
          </select>
        </label>
        <button style={{ backgroundColor: theme }}>Find Pets</button>
      </form>

      <Results pets={pets} />
    </div>
  );
};
