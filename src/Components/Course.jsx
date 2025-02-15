import Cards from "./Cards"
import list from "../../public/list.json"
import { Link } from "react-router-dom";
import { useEffect,useState } from "react";
import axios from "axios";

function Course() {
    console.log("list from courses",list);
    const[book,setbook]=useState([]);

    useEffect(()=>{
       const getBook=async()=>{
        try{
           const response=await axios.get("/api/books");
           
           console.log("response", response.data);
           setbook(response.data);
           
        }
        catch(error){
       console.log(error);
        }
       }
     getBook();
    },[])
  return (
    <>
    <div className="max-w-screen-2xl conatiner mx-auto md:px-20 px-4">
    <div className="mt-28 items-center justify-center text-center">
        <h1 className="text-2xl  md:text-4xl ">Wer delighted to have you<span className="text-pink-500"> here! :)</span> </h1>

        <p className="mt-12">Our courses offer a comprehensive learning experience designed to empower you
         with the skills needed to succeed. Whether youre looking to enhance your career,
          explore new fields, or pursue personal growth, we provide diverse and flexible options.
           Each course is taught by industry experts,
         ensuring quality content that caters to various learning styles and goals.</p>

         <Link to={"/"}>
         <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration 300">
         BACK</button>
         </Link>
    </div>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
            {
                book.map((item)=>(
                    <Cards item={item} key={item}/>
                )
                )
            }
        </div>
      </div>
    </>
    
  )
}

export default Course
