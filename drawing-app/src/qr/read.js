import React,{useRef, useState} from 'react'
import { Div,Input,Button} from './style'
import QrScanner from 'qr-scanner'


const Read = () => {
    const [files,setFiiles] = useState("")
    const [data,setData] = useState(null)
    const fileRef = useRef(null) 
    
    const handleClick = () =>{
        fileRef.current.click()
    }

    const handlechange =async (e) =>{
      const val  = e.target.files[0]
        setFiiles(val)
        const result =await QrScanner.scanImage(val)
        setData(result)
    }


  return (
    <Div center="center" w="50%">
      <h2>Read qr code</h2>
    
      <Button bg="green" onClick={handleClick} >Scan Qr code</Button>

      <Input display="none"
        ref={fileRef}
        type="file"
        accept='.jpeg, .png, .jpg'      
        onChange={e =>handlechange(e) }
      />
      {files && <div>
        <img src={URL.createObjectURL(files)} alt="qrcode"/>
        </div>}
      {data && <div>
        <p>{data}</p>
        </div>}
      
     
    </Div>
  )
}

export default Read
