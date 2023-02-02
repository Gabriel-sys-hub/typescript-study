import { useState, useEffect, Dispatch, SetStateAction } from "react";

//dispatch e setstateaction são interfaces pra tipar o useState;


//tipo T pode ser substituido por qualquer tipo de parametro, STRING, NUMBER, ARRAY... etc. 
//Serve para deixar a função ou typagem mais dinamica, quando não se sabe o exato retorno.

type Response<T> = [T, Dispatch<SetStateAction<T>>];

function usePersistedState<T>(key: string, initialState: any): Response<T> {
  const [state, setState] = useState(() => {
    const storageValue = localStorage.getItem(key);

    if (storageValue) {
      return JSON.parse(storageValue);
    } else {
      return initialState;
    }
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
}

export default usePersistedState;
