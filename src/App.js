import './App.css';
import {useState} from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {DatePickerComponent} from "@syncfusion/ej2-react-calendars";
import { Form } from 'react-bootstrap';

/**
 * Create a webpage with a form to hire a taxi from Heathrow and Gatwick.
 Next fields should be included into the form:
 Your full name (required)
 Your mobile phal (required, valid date)
 Airport (optione (required, valid UK phone number format)
 Date of arrivons: "Heathrow", "Gatwick", required)
 If "Heathrow" is selected, then show additional field: Terminal (options: "1", "2", "3", "4", "not sure")
 Airflight number (required, valid airflight number format)
 When the form is submitted, the above enquiry should be sent to a server (or a server mock) using the GraphQL protocol, the data should be additionally saved to a local storage and the confirmation popup should be shown followed by a link to unbiased.co.uk site (opens in new tab).
 * @returns {JSX.Element}
 * @constructor
 */
function App() {
    const airports = [
        {id: 0, name: "Heathrow", gates: [1, 2, 3, 4]},
        {id: 1, name: "Gatwick", gates: []},
        {id: 3, name: "232", gates: []}
    ]
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [date, setDate] = useState("");
    const [airport, setAirport] = useState({id: 3, name: "232", gates: []});
    const [gate, setGate] = useState("")

    const sendInfo = () => {
        alert("!");
    }

    const nameInputChange = (event) => {
        setName(event.target.value)
    }

    const phoneInputChange = (event) => {
        setPhone(event.target.value)
    }

    const dateInputChange = (event) => {
        setDate(event.target.value)
    }

    const airportChange = (event) => {
        let find = airports.find(value => value.name === event.target.value);
        let newAirport = {...airport, id: find.id, name: find.name, gates: find.gates}
        setAirport(newAirport)
    }

    const gateChange = (event) => {
        let id = event.target.id;
        setGate(id);
    }

    return (
        <div className="App">
            <form onSubmit={sendInfo}>
                <label>Enter your name:</label>
                <input type="text" value={name} onChange={nameInputChange}/>

                <label>Enter your phone:</label>
                <input type="text" value={phone} onChange={phoneInputChange}/>

                <label>Enter your date:</label>
                <input type="text" value={date} onChange={dateInputChange}/>

                <label>Select your airport</label>
                <select value={airport.name} onChange={airportChange}>
                    {airports.map((airport) => <option key={airport.id} id={airport.id}>{airport.name}</option>)}
                </select>

                {

                    airport.gates.map((value) => {
                        let className;
                        if (gate == value) {
                            className = "gate-active"
                        } else {
                            className = "gate"
                        }
                        return <div id={value} key={value} className={className} onClick={gateChange}>{value}</div>
                    })
                }

                <input type="submit" value="Send"/>
            </form>
        </div>
    );
}

export default App;