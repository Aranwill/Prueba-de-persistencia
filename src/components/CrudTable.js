import CrudTableRow from "./CrudTableRow"




const CrudTable = ({data}) => {
  return (
    <div>
    <h3>Tabla de Datos</h3>
    <table>
            <thead>
            <tr>
            <th>Nombre</th>
            <th>Constelacion</th>
            <th>Acciones</th>
            </tr>
        </thead>
        <tbody>
            {
                data.length === 0 && (
                    <tr>
                        <td>Sin datos</td>
                    </tr>
                )
            }
            {
                data.length !== 0  && (
                    data.map(caballero => <CrudTableRow 
                        key={caballero.id}
                        caballero={caballero}
                        />)
                )
            }
        </tbody>
    </table>
    </div>
  )
}

export default CrudTable