import { useState, useEffect } from "react";

function Home() {
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch("http://localhost:3000/backend")
      .then((response) => response.json())
      .then((data) => {
        setData(data.cars); // Odczytujemy tablicę `cars` z obiektu API
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  }, []);

  return (
    <div>
      <h1>Cars Data</h1>
      {/* Wyświetlanie danych */}
      {data.length > 0 ? (
        <ul>
          {data.map((car) => (
            <li key={car.id}>
              {car.brand} {car.model} ({car.year})
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading data...</p>
      )}
      {/* Przykład przycisku zwiększającego licznik */}
      <button onClick={() => setCount((count) => count + 1)}>
        Count is {count}
      </button>
    </div>
  );
}

export default Home;