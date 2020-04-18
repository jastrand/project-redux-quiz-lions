import React from "react"
import { Link } from "react-router-dom"
import "../Styling/buttons.css"
import "../Styling/start.css"

export const StartPage = () => {
    return (
        <div className="start-container">
            <h1>Welcome to the quiz!</h1>
            <Link className="button" to="/quiz">Click</Link>
        </div>

    )
}