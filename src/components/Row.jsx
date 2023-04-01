import { useEffect, useState } from "react"


const Row = ({index, onUpdate, onRemove}) => {
const [number, setNumber] = useState(0)
const [sign, setSign] = useState('+')
const [enabled, setEnabled] = useState(true)

useEffect(() => {
    onUpdate({index, sign, number, enabled})
},[number, sign, enabled])

const handleNumChange = (event) => {
    setNumber(Number(event.target.value))
}
const handleSignChange = (event) => {
    setSign(event.target.value)
}
const handleRemove = () => {
    onRemove(index)
}
const handleEnabled = () => {
    setEnabled((enabled) => !enabled)
}
    return(
        <div className="row">
            <select className={sign === '+' ? 'plus' : 'minus'} value={sign} onChange={handleSignChange}>
                <option value='+'>+</option>
                <option value='-'>-</option>
            </select>
            <input className={ enabled ? '' : 'disabled-input'} type='number' value={number.toString()} onChange={handleNumChange}></input>
            <button className="delete-btn" onClick={handleRemove}>Delete</button>
            <button className={`disable-btn ${ enabled ? '' : 'disabled'}`} onClick={handleEnabled}>{enabled ? 'Disable' : 'Enable'}</button>
        </div>
    )
}

export default Row