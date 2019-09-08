import React from "react"
import ReactDOM from "react-dom"

function MyInfo() {
    return (
      <div>
        <h1>Sonya</h1>
        <p>This is a paragraph about me...</p>
        <ul>
          <li>Nordic Countries</li>
          <li>Caribbean</li>
          <li>Maldives</li>
        </ul>
      </div>
    )
  }
  
  ReactDOM.render(<MyInfo />, document.getElementById("root"))