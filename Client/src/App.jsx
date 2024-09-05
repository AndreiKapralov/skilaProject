import { useEffect, useState } from 'react'
import axios from 'axios';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const getInformation = async() => {
    try{
      const data = await axios.post('https://api.skilla.ru/mango/getList',{
        "date_start": "2024-01-01",
        "date_end": "2024-01-31",
        "in_out": "in"
    },{
      headers: {
        'Authorization': 'testtoken'
      }
      });
      console.log(data)
    } catch{
      console.log('error')
    }
  }

  

  useEffect(() => {
    getInformation()
  }, [])

  return (
    <>
    <h1>Hello</h1>
    </>
  )
}

export default App
