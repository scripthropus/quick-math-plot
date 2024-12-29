import { CreateChart } from './CreateChart'
import './App.css'

function App() {
  return (
    <>
    <div style={{display: "flex", justifyContent: "center"}}>
    <CreateChart fn={Math.sqrt} range={[0,10]} step={0.1}/>
    </div>
    </>
  )
}

export default App
