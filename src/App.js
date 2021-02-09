import ItemTable from "./ItemTable";
import { useState, useEffect } from "react";

function App() {
  //add useState for all state variables
  const [name, setPersonName] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState();
  const [names, setName] = useState([]);

  //load locationStorage
  useEffect(() => {
    const items = localStorage.getItem("items");
    // ...
    setName(JSON.parse(items));
  }, []);

  function addUser() {
    setName([...names, { name: name, gender: gender, age: age }]);
    window.localStorage.setItem("items", JSON.stringify(names));
    console.log(names);
    alert("already add");
  }

  return (
    <div className="card" style={{ width: 400 }}>
      <div className="card-content">
        <p className="is-4 title has-text-centered">Add Pet</p>
        <div className="field">
          <label className="label">Name</label>
          <input
            className="input"
            type="text"
            placeholder="e.q Coco"
            //update related state based on event
            value={name}
            onChange={(e) => {
              setPersonName(e.target.value);
            }}
          ></input>
        </div>

        <div className="field">
          <label className="label">Gender</label>
          <select
            className="input"
            type="text"
            placeholder="Please select .."
            value={gender}
            onChange={(e) => {
              setGender(e.target.value);
            }}
          >
            <option value="" disabled selected hidden>
              -- Select Gender --
            </option>
            <option>Male</option>
            <option>Female</option>
          </select>
        </div>

        <div className="field">
          <label className="label">Age</label>
          <input
            className="input"
            type="number"
            placeholder="e.q 5"
            value={age}
            onChange={function myFn(e) {
              setAge(e.target.value);
            }}
          ></input>
        </div>

        <button onClick={addUser} className="button is-danger is-fullwidth">
          Submit
        </button>

        <div className="mb-4"></div>

        {/* display tables for all persons */}
        <p className="is-4 title has-text-centered">Pet List</p>
        {/* sample table */}
        {names.map((data) => {
          <ItemTable name={data.name} gender={data.gender} age={data.age} />;
        })}
        <ItemTable name="Coco" gender="Male" age="56" />
        <p>Kitiyaporn Takham 620610774</p>
      </div>
    </div>
  );
}

export default App;
