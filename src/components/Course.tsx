import type { CourseItem } from "../types"

type courseItem = {
    courseItem:CourseItem
}

const Course:React.FC<courseItem> = ({courseItem}) => {
  return (
    <div className="h-[350px] w-[350px] rounded-xl mt-6 bg-gray-200 p-3 hover:scale-105 hover:shadow-xl shadow-slate-900 transition-all duration-300">
      <div className="flex justify-center items-center">
        <img
        className="rounded-xl"
        src={courseItem.image.url} alt={courseItem.image.alt}/>
      </div>
      <div>
        <p className="font-semibold text-lg">
            {courseItem.title.length>18?courseItem.title.substring(0,22)+"...":""}
        </p>
        <p>
            {courseItem.description.length>180?courseItem.description.substring(0,180)+"...":""}
        </p>
      </div>
    </div>
  )
}

export default Course
