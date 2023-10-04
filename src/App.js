import { useState } from "react";
import { Dictionary } from "./Dictionary";
import { Navbar } from "./Navbar";

function App() {
  const [nightMode, setNightMode] = useState(false);
  const[font,setFont]=useState("serif");

  
  return (
    <div className={`App ${nightMode ? "night-mode" : ""} `}>
      <Navbar nightMode={nightMode} setNightMode={setNightMode} setFont={setFont} />
      <Dictionary font={font}/>
    </div>
  );
}

export default App;
