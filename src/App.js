import axios from "axios"
import { useState } from "react";

function App() {

    const[deg,setdeg] = useState("234")
    const[city,setcity] = useState("France")
    const[desc,setdesc] = useState("Raining")
    const[enteredvalue,setenteredvalue] = useState("")

    function handleInput(event)
    {
        console.log(event.target.value)
        setenteredvalue(event.target.value)
    }

    function getdata() {
        var weather = axios(`https://api.openweathermap.org/data/2.5/weather?q=${enteredvalue}
        &appid=5942b5c4409d710f6f3e45e1279ae78e`)

        weather.then(function (value) {
            console.log(value.data)
            setdeg(value.data.main.temp)
            setcity(value.data.name)
            setdesc(value.data.weather[0].description)
        });



    }

    return (
        <div className="flex flex-row justify-center h-[100vh] items-center">
            <div style={{ backgroundImage: "linear-gradient(120deg, #a6c0fe 0%, #f68084 100%)" }} className="p-5 rounded-md shadow">

                <h2 className="font-semibold">Hey!🌤️</h2>

                <p className="text-sm font-medium">Do you want to know the weather report :)</p>

                <input onChange={handleInput} type="text" className="rounded-md h-6 text-sm mt-2 p-1 outline-none" placeholder="City Name?" />

                <br />

                <button onClick={getdata} className="bg-black rounded-lg text-white p-1 mt-2">Get Report⚡</button>

                <p className="text-sm mt-2" >Degree:{deg} | City:{city} | Weather:{desc}</p>



            </div>

        </div>)
}
export default App