import React, { useState , useEffect } from 'react'
import { APPstate, counts, users } from '../App'
import FormA from './forms'
//leer de abajo hacia arriba
export function Listas() {
     const [count, setCount] = useState<APPstate["subs"]>([]) //este <APPstate["subs"]> hace referencia a la interface
      useEffect(()=> {                                        //la cual le ayuda a la funcion para saber que tipo de
        setCount(users)                                       //parametros van a entrar
      }, [])
      return (
      <div>
          <h1>users</h1> 
          <ul className='UsersContainer'>
            {
              
              count.map(item =>{
               if(item.imgUrl){
                return( 
                  <li className='usuario' key={item.name}> 
                    <img className='imgTrue' src={item.imgUrl} alt="" />
                    <span>Nick Name: {item.nombredeUsuario}</span>
                    <span>Name: {item.name}</span>
                    <span>description: {item.description}</span>
                  </li>
                  )
               }else{
                return( 
                  <li className='usuario' key={item.name}> 
                    <span className='noIMG'>no hay img</span>
                    <span>Nick Name: {item.nombredeUsuario}</span>
                    <span>Name: {item.name}</span>
                    <span>description: {item.description}</span>
                  </li>
                  )
               }
               
              })
            }
          </ul>
          <FormA onNewSub={setCount}/>  
                                        //este set count los que hace es llamar a la funcion de 
                                        //nuevo para añadir la nueva cuenta "dale click a setCount"
      </div>
    ) 
    
  }
