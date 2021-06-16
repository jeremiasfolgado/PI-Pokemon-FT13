import React,{useState} from 'react'


export function OrderByType ({getTypeToOrder}){
    const[type, setType] = useState("")
    const handleChange = e =>{
        setType(e.target.value)
    }
    const handleSubmit = e =>{
        e.preventDefault();
        getTypeToOrder(type)
        setType("")
    }   

    return (
        <form onSubmit={handleSubmit}>
            <select name='select'onChange={handleChange}>
                <option value='normal'>normal</option>
                <option value='fighting'>fighting</option>
                <option value='flying'>flying</option>
                <option value='poison'>poison</option>
                <option value='ground'>ground</option>
                <option value='rock'>rock</option>
                <option value='bug'>bug</option>
                <option value='ghost'>ghost</option>
                <option value='steel'>steel</option>
                <option value='fire'>fire</option>
                <option value='water'>water</option>
                <option value='grass'>grass</option>
                <option value='electric'>electric</option>
                <option value='psychic'>psychic</option>
                <option value='ice'>ice</option>
                <option value='dragon'>dragon</option>
                <option value='dark'>dark</option>
                <option value='fairy'>fairy</option>
                <option value='unknown'>unknown</option>
                <option value='shadow'>shadow</option>

            </select>
            {type && <button type='submit' >Filter by type</button>}

        </form>
       
       
       
    )
}
export default OrderByType;