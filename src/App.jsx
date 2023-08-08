import React from "react"
import { Card } from "./components/card"

function App() {
  const [state, useState]=React.useState([])
  return (
    <div>
      <Card/>
    </div>
  )
}

export default App
