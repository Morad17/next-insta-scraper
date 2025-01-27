import Image from "next/image";
import { useState } from "react";

export default async function Home() {

  const [searchTerm, setSearchTerm] = useState('')

  const url = process.env.HASHTAG_URL + searchTerm;
  const options = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': process.env.RAPIDAPI_KEY,
      'x-rapidapi-host': process.env.RAPIDAPI_HOST
    }
  };

  const data = await fetch("") 


  return (
    <div className="">
        <h2>Hello world</h2>
        <form action="">
          
        </form>
        <input type="text" onChange={()=> setSearchTerm()} />
    </div>
  );
}
