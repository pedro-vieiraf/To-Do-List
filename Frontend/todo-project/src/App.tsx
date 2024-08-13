import { Route, Routes } from 'react-router-dom'
import './App.css'
import ToDoList from './pages/TodoList'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<ToDoList />}></Route>
      </Routes>
    </>
  )
}

export default App
