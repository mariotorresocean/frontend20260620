import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'


function Contador({ count, onClick }) {
  return (
    <button
          type="button"
          className="counter"
           onClick={onClick}>
          A contagem é {count}
        </button>
  );

}

function App() {
  const [count, setCount] = useState(0)

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <>
      <section id="center">
        <Contador count={count} onClick={handleClick} />
        <Contador count={count} onClick={handleClick} />
        <Contador count={count} onClick={handleClick} />
        <Contador count={count} onClick={handleClick} />
        <Contador count={count} onClick={handleClick} />
      </section>

    </>
  )
}

export default App
