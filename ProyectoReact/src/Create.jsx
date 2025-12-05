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
            document.getElementById("role_name").value = "";
            location.reload();
            return console.log(data)
            
        })
    }

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">

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
                                Crear Rol
                            </h3>

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
                                    id="role_name"
                                    placeholder="Ej: Administrador"
                                    style={{
                                        border: "1px solid #c7a27b",
                                        backgroundColor: "#1b1a19ff"
                                    }}
                                />
                            </div>

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
