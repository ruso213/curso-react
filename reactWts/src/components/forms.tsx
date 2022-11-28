import React, { Fragment, useReducer, useState  } from 'react'
import { counts } from '../App'

interface fromprops{
  onNewSub :  React.Dispatch<React.SetStateAction<counts[]>> 
}
interface formstate{
  inputvalues : counts
  }
const INITIAL_STATE = {
  nombredeUsuario: "",
  description: "",
  name:"",
  imgUrl: ""
}
type formreduceraction = {
  type : "change_value"
  payload: {
    nameinput: string,
    valueinput: string
  } 
}| {
  type : "clear"
}
const formreducer = (state : formstate["inputvalues"] , action : formreduceraction) =>{
  switch(action.type){
    case "change_value":
      const {nameinput , valueinput} = action.payload
      return{
        ...state,
        [nameinput]: valueinput 
      }
      case "clear" :
        return INITIAL_STATE
      
  }
}
  function FormA ({onNewSub}  : fromprops) {
    // const [inputvalues ,setImputvalues] = useState<counts>({...INITIAL_STATE ,imgUrl : "https://i.pravatar.cc/150?u="})
    const [initialvalues , Dispatch] = useReducer(formreducer, INITIAL_STATE)
        
    const handleSubmit = (evt : React.FormEvent<HTMLFormElement>) => {
      console.log("hola");
      evt.preventDefault()
      onNewSub(subs => ([...subs , initialvalues]))
      handleClear()
    }
    const Handlechange = (evt:React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) =>{
      const{name , value} = evt.target
      Dispatch(
        {
          type:"change_value",
          payload :{
            nameinput : name,
            valueinput : value
          }
        }
      )
      /* setImputvalues({
          ...inputvalues,
          [evt.target.name] : evt.target.value
        }) */
      }
    const handleClear = () =>{
      Dispatch({type:"clear"})
/*       setImputvalues({...INITIAL_STATE, imgUrl :"https://i.pravatar.cc/150?u="})
 */    }
    return(
       <div className= 'addUserContainaer'>
          <h2 >añadir user</h2>
          <form onSubmit={handleSubmit} className='addUser'>
            <input type="text" placeholder='nickName' onChange={Handlechange} value = {initialvalues.nombredeUsuario} className="buscador" name='nombredeUsuario'/>
            <input onChange={Handlechange} value={initialvalues.name} id="nameReal" className="buscador" type="text" name='name' placeholder='name'/> 
            <textarea onChange={Handlechange} value={initialvalues.description} id="iduser" className="buscador"  name='description' placeholder='ID'/>   
            <input onChange={Handlechange} value={initialvalues.imgUrl} id="imgUrl" className="buscador" type="text" name='imgUrl' placeholder='imgUrl'/>
            <div className='botenes'>
              <button>submit</button>
              <button onClick={handleClear} type='button'>clear</button>
            </div>
          </form>
        </div>
    )
    }



    export default FormA