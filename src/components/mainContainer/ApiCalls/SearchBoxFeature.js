import React,{useState} from 'react'

export default function SearchBoxFeature() {

    const [search, setSearch] = useState("")
console.log(search);

  return (
    <>
    <input type="text" 
    placeholder='Search'
    className='w-250 form-control' 
    value={search} onChange={(e)=> setSearch(e.target.value)} />
    </>
  )
}
