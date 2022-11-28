import React, { useEffect, useRef, useState , } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { sub } from 'date-fns'
import  FormA  from "../src/components/forms";
import {Listas} from './components/list';


export interface counts {
  name:string,
  nombredeUsuario :string | undefined
  description : string  | undefined,
  imgUrl?: string
}
export interface APPstate{
  subs : counts[]
  newSubNumber : number
}
export const  users= [
  {
    name:"turs",
    description:"2131",
    nombredeUsuario:"asdf",
    imgUrl:"https://i.pravatar.cc/150?u=amlo"
  },
  {
    name:"rusin",
    description:"2131",
    nombredeUsuario:"asdf",
  }
]


function List() {
  
    
    return (
      <div>
        <Listas/>
      </div>
      
  ) 
  
}
export default List 

