import React from "react"
import Header from "./meme-components/Header"
import MemeGenerator from "./meme-components/MemeGenerator"
import "./style.css"

function App(){
  return(
    <div>
      <Header />
      <MemeGenerator />
    </div>
  )
}

export default App