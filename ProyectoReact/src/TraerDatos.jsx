import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'

export default function TraerDatos() {

    const [datos, setDatos] = useState([])

    function consumir_api(){
        fetch("http://127.0.0.1:8000/api/roles")
        .then(response => response.json())
        .then(data => setDatos(data))
    }

    useEffect(() => {
        consumir_api()
    }, [])


    function eliminar_api(id){
        fetch("http://127.0.0.1:8000/api/roles/" + id, {
            method: "DELETE"
        })
        .then(response => response.json())
        .then(data => {
            alert("Se ha eliminado")
            consumir_api()
        })
    }

    return (
        <div className="container mt-5">

            <div className="row justify-content-center">
                <div className="col-md-8">

                    <div 
                        className="card shadow"
                        style={{
                            backgroundColor: "#f6eee3",
                            border: "1px solid #c7a27b",
                            borderRadius: "12px"
                        }}
                    >
                        <div className="card-body">

                            <h3 
                                className="text-center mb-4"
                                style={{ color: "#6d4c3d", fontWeight: "bold" }}
                            >
                                Lista de Roles
                            </h3>

                            <table className="table">
                                <thead>
                                    <tr 
                                        style={{
                                            backgroundColor: "#e9d8c6",
                                            color: "#6d4c3d",
                                            fontWeight: "bold"
                                        }}
                                    >
                                        <th>Name</th>
                                        <th className="text-center">Opciones</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {datos.map(item => (
                                        <tr key={item.id}>
                                            <td>{item.role_name}</td>

                                            <td className="text-center" >
                                                <button 
                                                    className="btn btn-sm"
                                                    onClick={() => eliminar_api(item.id)}
                                                    style={{
                                                        backgroundColor: "#8b5e3c",
                                                        color: "white",
                                                        fontWeight: "bold",
                                                        borderRadius: "6px",
                                                        padding: "5px 12px"
                                                    }}
                                                >
                                                    Eliminar
                                                </button>

                                                <Link to = {"/editar/"+item.id}>
                                                    <button>Editar</button>
                                                </Link>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>

                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}
