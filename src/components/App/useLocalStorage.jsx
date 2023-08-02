import { useState, useEffect } from "react";

function useLocalStorage(itemName, initialValue) {
  const [item, setItem] = useState(initialValue);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);

        let parsedItem;

        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
          setItem(parsedItem);
        }

        setLoading(false);
      } catch (err) {
        setLoading(false);
        setError(true);
      }
    }, 1000);
  }, []);

  //ESTA FUNCIÓN SE ENCARGA DE PERSISTIR Y GUARDAR LAS TAREAS EN EL ESTADO Y LOCALSTORAGE
  function saveItem(newItem) {
    localStorage.setItem('TODOS_V1', JSON.stringify(newItem));
    setItem(newItem);
  }

  return { item, saveItem, error, loading };
}

export { useLocalStorage };