import React, { useState } from 'react'

interface User {
    userName: string;
    passWord: any;
}

export const Usuarios = () => {
    const [User, setUser] = useState<User>(); // agremagamos la interfaCe 

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");


    const login = (): void => {

        if (userName !== "" && password !== "") {
            setUser({
                userName: userName,
                passWord: password
            });
            alert("datos enviados!!");
            setPassword("");
            setUserName("");
        }else{
            alert("Error!! debe ingeresar valores");
        }
    }

    const handleSubmit = (event: any) => {
        event.preventDefault();
        //alert(` User:${userName}; Password: ${password}`);
        login();

    }


    const handleChange = (event: any): void => {
        //console.log(event.target.type);
        const tipoInput = event.target.type,
            tipoInfo = event.target.value;

        switch (tipoInput) {
            case "text":
                //console.log("tipe: tex");
                setUserName(tipoInfo);
                break;
            case "password":
                //console.log("tipe: password");
                setPassword(tipoInfo);
                break;
            default:
                break;
        }
    }
    return (

        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input type="text" value={userName} onChange={(event: any) => handleChange(event)} />
            </label>
            <label>
                Password:
                <input type="password" value={password} onChange={(event: any) => handleChange(event)} />
            </label>
            <input type="submit" value="Submit" />
        </form>

    )
}
