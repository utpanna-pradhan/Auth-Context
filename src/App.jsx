
import './App.css'
import Test from './Component/Test'
import { AuthProvider } from './Context/AuthXContext'

function App() {
  

  return (
    <AuthProvider>
      <h1 className='main_head'>AuthContext Learning</h1>
      <Test />
    </AuthProvider>
  )
}

export default App
