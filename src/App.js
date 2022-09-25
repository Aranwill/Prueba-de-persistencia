import { useState } from "react";
import CrudFrom from "./components/CrudFrom";
import CrudTable from "./components/CrudTable";

const initialDb = [
  {
  id: 1,
  name: "Seiya",
  constellation: "Pegaso",
  },
  {
  id: 2,
  name: "Shiryu",
  constellation: "Dragon",
  },
  {
  id: 3,
  name: "Hyoga",
  constellation: "Cisne",
  },
  {
  id: 4,
  name: "Shun",
  constellation: "Andromeda",
  },
  {
    id: 5,
    name: "Ikki",
    constellation: "Fenix",
    },
    ];



const App = () => {

  const [db, setDb] = useState(initialDb)

  return (
    <div>
      <h2>CRUD App</h2>
      <CrudFrom />
      <CrudTable data={db}/>
    </div>
  )
}

export default App