import React,{useState} from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import { Button } from '@material-ui/core';

const ListCom = (props) => {
    const [cutData,setCutData]=useState(false);

    const deleteEvent=()=>{
        setCutData(true);

    }
    return (
        <div className="list">
        
        <Button onClick={deleteEvent} variant="outlined" color="secondary" className="deletebtn">
          <DeleteIcon/>
        </Button>

       
         <li style= {{textDecoration : cutData ? "line-through": "none" }} className="todolist">{props.text}</li>
         {/* <video src="https://www.instagram.com/p/CN Vbz9DgUGi/" loop alt="not play"></video> */}
          
        </div>
       
    )
}

export default ListCom;
