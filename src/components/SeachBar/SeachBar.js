import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
function SeachBar() {
  const [data,setdata]=useState([])
  async function getdata(){
    await axios.get('https://newsapi.org/v2/top-headlines?country=in&apiKey=85a0070c80ef4504a47193d7f0e8cd8f')
    .then(item=>{
      setdata(item.data.articles)
    })
  }
  const [searchTerm, setSearchTerm] = useState("");
const[output, setoutput]=useState([])
 

  useEffect(()=>{
getdata()
  },[])
  

  useEffect(()=>{
    setoutput([])
    data.filter(val=>{
      if(val.title.toLowerCase().includes(searchTerm.toLowerCase())){
        setoutput(output=>[...output,val])
      }
    })
      },[searchTerm])
  return (
    <div style={{display:'flex',alignItems:'center',flexDirection:'column',height:'100vh',maxWidth:'700px',margin:'0 auto',backgroundColor:'whitesmoke'}}>
    
      <input
       className='p-2 mt-5 mb-5 w-100 rounded border'
        type="text"
        placeholder="''Search for News  ''    🔍"
        value={searchTerm}
        onChange={(e)=>setSearchTerm(e.target.value)}
        
      />

      
       
      <div>
          {output.map(res=>(
      <Link to={'/'}>

            <p  className='text-info' key={res.publishedAt}>{res.title}</p>
      </Link>

          ))}
        </div>
       
       
      
      
    </div>
  )
}

export default SeachBar