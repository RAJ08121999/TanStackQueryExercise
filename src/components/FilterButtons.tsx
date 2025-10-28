import type { APIResponse } from "../types"

type FilterButtonsProp = {
    buttonTitle:APIResponse["data"],
    setCategory:React.Dispatch<React.SetStateAction<string>>
    category:string
}

const FilterButtons: React.FC<FilterButtonsProp> = ({buttonTitle ,setCategory , category}) => {


    const categoryKeys = ["All",...Object.keys(buttonTitle)]

    return (
    <div className="flex justify-evenly items-center mt-3">
      {
        categoryKeys.map((button,index)=>(
            <button
                className={`bg-slate-900 px-3 py-2 font-semibold text-xl text-gray-100 rounded-lg mt-2 ${category===button?"scale-120 shadow-lg shadow-slate-900" : '' }`}
                onClick={()=>setCategory(button)}
                key={index}>
                    {button}
            </button>
        ))
      }
    </div>
  )
}

export default FilterButtons
