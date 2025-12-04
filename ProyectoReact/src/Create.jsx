import React, { useState } from 'react'


export default function Create() {
    const [role_name, setName] = useState("");

    function capturarNombre(e) {
        setName(e.target.value);
    }
    
    function guardar(){
        fetch("http://127.0.0.1:8000/api/roles", {
            method:"POST",
            headers:{
                "Content-Type":"Application/json"
            },
            body: JSON.stringify({role_name})
        })

        .then(function (response){
            return response.json()
        })

        .then(function (data){
            return console.log(data)
        })
    }

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">

                    {/* CARD MARRÓN */}
                    <div 
                        className="card shadow"
                        style={{
                            backgroundColor: "#f6eee3",   // beige cálido
                            border: "1px solid #c7a27b",   // marrón claro
                            borderRadius: "12px"
                        }}
                    >
                        <div className="card-body">

                            {/* TÍTULO */}
                            <h3 
                                className="text-center mb-4"
                                style={{ color: "#6d4c3d", fontWeight: "bold" }}
                            >
                                Crear Rol
                            </h3>

                            {/* INPUT */}
                            <div className="mb-3">
                                <label 
                                    className="form-label"
                                    style={{ color: "#5e4436" }}
                                >
                                    Nombre del Rol <br />
                                </label>

                                <input 
                                    type="text"
                                    className="form-control"
                                    value={role_name}
                                    onChange={capturarNombre}
                                    placeholder="Ej: Administrador"
                                    style={{
                                        border: "1px solid #c7a27b",
                                        backgroundColor: "#fff9f4"
                                    }}
                                />
                            </div>

                            {/* BOTÓN MARRÓN */}
                            <div className="d-grid">
                                <button 
                                    type="button"
                                    onClick={guardar}
                                    className="btn"
                                    style={{
                                        backgroundColor: "#8b5e3c",
                                        color: "white",
                                        fontWeight: "bold",
                                        borderRadius: "8px"
                                    }}
                                >
                                    Guardar
                                </button>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
