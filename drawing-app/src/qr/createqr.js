import React from 'react'
import { Div,Input,Button,Qr,Img} from './style'
import {useState} from 'react'
import  QRCode from 'qrcode'


const Createqr = () => {
 const [state, setstate] = useState("");
 const [images, setimages] = useState("");

    const handleSubmit = async(e)=>{
        e.preventDefault()
        if(!state){
            return alert("please enter some value")
        }else{
            const response = await QRCode.toDataURL(state)
               setimages(response)
               setstate("")
        }
        
        
        
    }

  return (

    <Div center="center" w="50%">

    <h2>create qr code</h2>
      <form onSubmit={handleSubmit}>
      <label htmlFor='text'>text : </label>
      <Input value={state} placeholder="text" id="text" name="text" onChange={e => setstate(e.target.value)}/>
      <Button bg="blue" type="submit">Add</Button>
      </form>

      {images && <Qr>
        <a href={images} download="qre.pdf">
        <Img src={images} alt="qr code"/>
        </a>
        </Qr>}
    </Div>
  )
}

export default Createqr
