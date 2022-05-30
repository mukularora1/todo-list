import React, { useState } from 'react'
// import List from './List';
import './todo.css'


function Todo() 
{
  let [data,setData]= useState("");
    let [list,setList] = useState([]);
    
    const handledel =(id) =>{
      
      setList((old)=>{
      return old.filter((arr,index)=>{
        return index!==id;
      })
      }
      )
      console.log("del")

    } 
    
    const handleAdd = () =>{
      if (data==="")
      {
        return;
      }
setList((old)=>{
  return [...old,data];
});
setData("");
    }
    const handleOnchange = (event) =>{
      setData(event.target.value);
    }
  return (
    <div className='todo'>
        <div className='todo__header'>
        <input type="text" placeholder='take a note...' onChange={handleOnchange} value={data} />
        <button className='todo_header_add-btn' onClick={handleAdd}>+</button>

        </div>
        <div className='todo__body'>

        {
            list.map((item,i) => {
                return (
                  
                  <div key={i}> <button className='todo__body_btn' onClick={()=>{handledel(i)}}>-</button> {item}</div>
                  
                )
            } )
        }
       
        </div>
    </div>
  )
}

export default Todo;