import type { APIResponse, CourseItem } from "../types"
import Course from "./Course";

type CourseListProp = {
    courseData:APIResponse["data"],
    category:string,
};

const CourseList:React.FC<CourseListProp> = ({courseData,category}) => {
    

    function getCourses (){
        if(category==="All"){
            const allDataArray = Object.values(courseData).flat();
            console.log("All course data ",allDataArray);
            return allDataArray;
        }
        else{
            return courseData[category as keyof typeof courseData];
        }
    }
  return (
    <div className="flex flex-wrap justify-between items-center w-full">
      {
        getCourses()?.map((course:CourseItem)=>(
            <Course key={course.id} courseItem = {course}/>
        ))
      }
    </div>
  )
}

export default CourseList
