import Add from "../components/add"
import Create from "../components/create"
import { useState } from "react"

export default  function Upload(){
    return (
        <div className="flex flex-col bg-teal-200 h-screen">
            <div className="flex flex-col p-2 gap-1">
                <label htmlFor="question">Question</label>
                <input type="text" id="question" name="question" className="bg-white border-b border-gray-200 rounded p-1"/>
            </div>
            <div className="flex flex-col p-2 gap-1">
                <label htmlFor="option">Option</label>
                <input type="text" id="question" name="option" className="bg-white"></input>
            </div>
        </div>
    )
}