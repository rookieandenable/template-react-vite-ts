import { useState } from 'react'
import reactLogo from './assets/react.svg?url'
import viteLogo from '/vite.svg?url'
import './App.css'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { RootState } from '@/store'
import { setLoginState } from '@/store/modules/login'

function App() {
  const [count, setCount] = useState(0)
  const dispatch = useAppDispatch()
  const login = useAppSelector((state: RootState) => state.login)
  console.log(login)

  console.log('全局环境变量 --', import.meta.env)

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
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <p onClick={() => dispatch(setLoginState(!login.login))}>
        点击我 -- {String(login.login)}
      </p>
    </>
  )
}

export default App
