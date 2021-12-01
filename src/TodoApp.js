import React,{useState} from 'react';
import "./Todo.css";
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Add from '@material-ui/icons/Add';
import ListCom from "./ListCom";


const TodoApp = () => {
    const [item,setItem]=useState("");
    const [data,setData]=useState([]);
    const inputChange=(e)=>{
        setItem(e.target.value);

    }
    const BtnEvent=()=>{
        if(item){
            setData((preData)=>{
                return [...preData,item];
            })
            setItem("");
        }
       
       

    }
    const deleteAll=()=>{
        setData([]);
    }
    return (
        <div className="main_div">
        <div className="Center_div">
           <h2>Todo App</h2>
           <div className="input_box">
           <input 
            onChange={inputChange}
            value={item}
           type="text" placeholder="Enter your todo " />
           </div>
           <br/>
           <Button onClick={BtnEvent} variant="contained" color="primary" className="mybtn">
                   <AddIcon  />    
           </Button>
           <div className="list_box">
           <ol>
               {
                   data.map((val)=>{
                     return <ListCom  text={val} />
                     
                   })
               }
           </ol>

           </div>
              <div className="removeBox">
                  <button onClick={deleteAll}>Delete All</button>
              </div>

        </div>
            
        </div>
    )
}

export default TodoApp;
