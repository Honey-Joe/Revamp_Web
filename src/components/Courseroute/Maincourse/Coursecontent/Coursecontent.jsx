import { Link } from "react-router-dom"
import Coursecarddata from "../../../../API/Coursecarddata"
import Topcoursecard from "../../Topcoursecard/Topcoursecard"

const Coursecontent = () => {
  return (
    <>
     <div className="w-[90%] grid grid-cols-1 mx-auto lg:mx-0 lg:grid-cols-2 xl:grid-cols-3 gap-7 py-10">
              {
                Coursecarddata.map((e)=>{
                  return(
                    <>
                    <Link to={"/coursedetails"}>
                    <Topcoursecard
                       imgurl = {e.imgurl}
                       review = {e.review}
                       coursetitle = {e.coursetitle}                       
                       lesson = {e.lesson}
                       description = {e.description}
                       stud = {e.stud}
                       price = {e.price}
                    ></Topcoursecard>
                    </Link>
                    
                    </>
                  )
                })
              }
            
        </div> 
    </>
  )
}

export default Coursecontent
