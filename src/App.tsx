import { Route } from 'react-router-dom';
import './App.css'
import Dashboard from "./pages/Dashboard";


function App() {

  return (
    <>
      <Route path="/dashboard" element={<Dashboard />} />

    </>
  )
}

export default App
