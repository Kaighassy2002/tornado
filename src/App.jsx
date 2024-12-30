
import './App.css'
import Home from './pages/Home'
import tornado from "./assets/images/new.jpg";
function App() {
 
  return (
    <>
     <div
      style={{
        height:"100vh",
        width:"100%",
       
        backgroundImage: `url(${tornado})`,
        backgroundAttachment: "fixed", /* Makes the image fixed while scrolling */
    backgroundSize: "cover", /* Ensures the image covers the entire area */
    backgroundPosition: "center"
      }}
     >
      <Home/>
     </div>
    </>
  )
}

export default App
