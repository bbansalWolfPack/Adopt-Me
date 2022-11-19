/*
 * Custom Hook for fetching breedsfor given animal
 */

import { useState, useEffect } from "react";

const localCache = {};

export const useBreedList = (animal) => {
  const [breedList, setBreedList] = useState([]);
  const [status, setStatus] = useState("unloaded");

  useEffect(() => {
    if (!animal) {
      // setBreedList([]);
    } else if (localCache[animal]) {
      setBreedList(localCache[animal]);
    } else {
      requestBreedList();
    }

    async function requestBreedList() {
      setBreedList([]);
      setStatus("loading");
      const res = await fetch(
        `http://pets-v2.dev-apis.com/breeds?animal=${animal}`
      );
      try {
        const json = await res.json();
        localCache[animal] = json.breeds || [];
        setBreedList(localCache[animal]);
        setStatus("loaded");
      } catch (error) {
        setStatus("Failed");
      }
    }
  }, [animal]);

  return [breedList, status];
};
