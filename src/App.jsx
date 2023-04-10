import { useState } from 'react'
import './App.css'
import { nanoid } from 'nanoid'
import Row from './components/Row'
import gifImg from './assets/giphy.webp'

function App() {

  const [rows, setRows] = useState([{id:0, sign: '+', number: 0, enabled: true}])

  const addRow = () => {
    const newId = nanoid()
    setRows([...rows,{id:newId, sign: '+', number: 0, enabled: true}])
    console.log(rows)
  }
  const handleRowRemove = (id) => {
    setRows(rows.filter(row => row.id !== id))
  }
  const handleRowUpdate = (updatedRow) => {
    setRows(rows.map((row) => row.id === updatedRow.id ? updatedRow : row))
  }
  const sum = rows.reduce((acc, row) => {
    if(row.enabled){
      row.sign === "+" ? acc += row.number : acc -= row.number
    }
    return acc
  },0)

  
  return (
    
    <div className='adder-container'>
      <div className='rows'>
      <button className='add-row-btn' onClick={addRow}>Add row +</button>
      {rows.length < 1 && 
      <div>
        <p className='no-rows-para'>add rows to start calculating!</p>
        <img src={gifImg} alt='Man trying to calculate'/>
      </div> }
     { rows.map(row => {
      return(
      <Row key={row.id} id={row.id} onUpdate={handleRowUpdate} onRemove={handleRowRemove} />
     )})}
     </div>
     <div className='result'>
      <h3 className='result-h3'>Result: {sum}</h3>
     </div>
     
    </div>
  )
}

export default App
