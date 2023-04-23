import { useEffect, useState } from 'preact/hooks'
import preactLogo from './assets/preact.svg'
import viteLogo from '/vite.svg'
import './app.css'
import axios from 'axios'

export function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <div>
        <a onClick={() => {
          axios.get('http://localhost:8888/set', {
            // withCredentials: true,
          }).then(r => r);
        }}>
          <p>Set cookie</p>
        </a>

        <a onClick={() => {
          axios.get('http://localhost:8888/delete', {
            // withCredentials: true,
          }).then(r => r);
        }}>
          <p>Delete cookie</p>
        </a>
      </div>
    </>
  )
}
