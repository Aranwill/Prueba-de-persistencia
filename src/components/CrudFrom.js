import {  useState } from "react";


const initialForm = {
    name: "",
    constellation: "",
    id: null
}

const CrudFrom = () => {

    const [form, setForm] = useState(initialForm)

    const handlChange = () => {}

    const handleSubmit = () => {}

    const handleReset = () => {}
    

  return (
    <div>
        <h3>Agregar</h3>
        <form>
            <input type="text" name="name" placeholder="Nombre" onChange={handlChange} value={form.name}/>
            <input type="text" name="constellation" placeholder="constellation" onChange={handlChange} value={form.constellation} />
            <input type="submit" value="Enviar"/>
            <input type="reset" value="Limpiar" onclick={handleReset} />
        </form>
    </div>
  )
}

export default CrudFrom;