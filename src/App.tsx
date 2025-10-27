import { useQuery } from "@tanstack/react-query";
import axios from "axios"
import { useState } from "react";
import Navbar from "./components/Navbar";
import FilterButtons from "./components/FilterButtons";
import CourseList from "./components/CourseList";
import Footer from "./components/Footer";
import Spinner from "./components/Spinner";

const App = () => {
  const [ category , setCategory ] = useState<string>("All");

  const baseUrl = "https://codehelp-apis.vercel.app/api/get-top-courses"

  async function fetchCourseData (){
    try{
      const res = await axios.get(baseUrl);
      return res.data;
    }
    catch(error){
      console.log("Error in fetching data",error)
    }
    
  };

  const {data , isLoading , isError , error } = useQuery({
    queryKey:["course"],
    queryFn:fetchCourseData,
  });

  if(isLoading) return (
    <div className="w-full h-screen flex justify-center items-center bg-white">
      <Spinner/>
    </div>
  )

  if(isError) return <p>Error in fetching data:{error.message}</p>

 
  return (
    <div className=" w-full min-h-screen flex flex-col items-center bg-white">
      <Navbar/>

      <div className="w-10/12 h-full flex flex-col">

        <FilterButtons buttonTitle = {data.data} setCategory = {setCategory} category={category} />

        <CourseList courseData = {data.data} category = {category}/>
      </div>

      <Footer/>
      
    </div>
  )
}

export default App
