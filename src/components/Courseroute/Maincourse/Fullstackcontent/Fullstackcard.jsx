import { Link } from "react-router-dom"
import Fullstackdata from "../../../../API/Fullstackdata"
import FullstackContent from "./FullstackContent"

const Fullstackcard = () => {
  return (
    <>
     <div className="max-w-[100%]">
     <div className="w-[90%] grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-7 py-10">
              {
                Fullstackdata.map((e)=>{
                  return(
                    <>
                    <Link to={"/coursedetails"}>
                    <FullstackContent
                       imgurl = {e.imgurl}
                       review = {e.review}
                       coursetitle = {e.coursetitle}                       
                       lesson = {e.lesson}
                       description = {e.description}
                       stud = {e.stud}
                       price = {e.price}
                    ></FullstackContent></Link>
                    
                    </>
                  )
                })
              }
            
        </div> 
     </div>

    </>
  )
}

export default Fullstackcard
