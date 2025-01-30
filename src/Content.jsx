import {FaTrashAlt } from "react-icons/fa";
import React from "react";

const Content=({items,handleCheck,handleDelete})=>
{
  return(
    <main>
      {
        (items.length)?(
            <ul>
            {items.map((item,index) => (
              <li className="item" key={index}>
                <input
                type="checkbox"
                onChange={()=>handleCheck(item.id)}
                checked = {item.checked}
                />
                <label
                style={(item.checked)?
                {textDecoration:"line-through"}:null}
                >{item.item}</label>
                <FaTrashAlt 
                  role="button"
                  onClick={()=>handleDelete(item.id)}
                  tabIndex="0"
                />
              </li>
            ))}
          </ul>
        ):(
        <p className="empty">YOU'RE LIST IS EMPTY</p>
      )
    }
    </main>
  )
}

export default Content