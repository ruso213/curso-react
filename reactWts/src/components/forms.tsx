import React, { Fragment, useState  } from 'react'
import { counts } from '../App'

interface fromprops{
  onNewSub :  React.Dispatch<React.SetStateAction<counts[]>> 
}

  function FormA ({onNewSub}  : fromprops) {
        const [inputvalues ,setImputvalues] = useState<counts>(
          {
            nombredeUsuario: "",
            description: "",
            name:"",
            imgUrl: "https://i.pravatar.cc/150?u="
          }
        )
    
        
    const handleSubmit = (evt : React.FormEvent<HTMLFormElement>) => {
      console.log("hola");
      evt.preventDefault()
      onNewSub(subs => ([...subs , inputvalues]))
      handleClear()
    }
    const Handlechange = (evt:React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) =>{
       console.log("adio");
       
      setImputvalues({
          ...inputvalues,
          [evt.target.name] : evt.target.value
        })
      }
    const handleClear = () =>{
      setImputvalues({
            nombredeUsuario: "",
            description: "",
            name:"",
            imgUrl: ""
      })
    }
    return(
       <div className= 'addUserContainaer'>
          <h2 >añadir user</h2>
          <form onSubmit={handleSubmit} className='addUser'>
            <input type="text" placeholder='nickName' onChange={Handlechange} value = {inputvalues.nombredeUsuario} className="buscador" name='nombredeUsuario'/>
            <input onChange={Handlechange} value={inputvalues.name} id="nameReal" className="buscador" type="text" name='name' placeholder='name'/> 
            <textarea onChange={Handlechange} value={inputvalues.description} id="iduser" className="buscador"  name='description' placeholder='ID'/>   
            <input onChange={Handlechange} value={inputvalues.imgUrl} id="imgUrl" className="buscador" type="text" name='imgUrl' placeholder='imgUrl'/>
            <button>submit</button>
          </form>
        </div>
    )
    }



    export default FormA