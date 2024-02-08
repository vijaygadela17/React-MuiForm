import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useState } from "react";


export default function MUIDemo(){
    const [userName, setUserName] = useState('');

    function handleNameChange(e){
        setUserName(e.target.value)
    }

    return(
        <div className="container-fluid">
            <h1>MUI Demo</h1>
            <dl className="w-25">
                <dt>Bootstrap TextBox</dt>
                <dd><input type="text" className="form-control" placeholder="User Name" /></dd>
                <dd><button className="btn btn-primary">Submit</button></dd>
                <dt>MUI TextBox</dt>
                <dd>
                    <TextField onChange={handleNameChange} label="User Name" variant="standard" />
                </dd>
                <dd>
                    <Button variant="contained" color="error" > Submit </Button>
                </dd>
            </dl>
            <h3>Hello ! { userName }</h3>
        </div>
    )
}