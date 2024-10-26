import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import { useState } from 'react'

function Home() {
const [count, setCount] = useState(0)
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button
          className="btn btn-primary"
          onClick={() => setCount((count) => count + 1)}
        >
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <article>
        <h1 className="read-the-docs">
          Click on the Vite and React logos to learn more
        </h1>
      </article>
    </>
  );
}

export default Home;
