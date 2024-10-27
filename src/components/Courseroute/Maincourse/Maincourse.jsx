import Footer from "../../Footer/Footer"
import Navbar from "../../Navbar/Navbar"
import CourseTab from "./CourseTab/CourseTab"
import Headercarousel from "./Headercarousel/Headercarousel"

const Maincourse = () => {
  return (
    <>
     <div className="max-w-[100%] mx-auto">
        <div className="grid grid-cols-1 w-[100%] mx-auto">
            <Navbar></Navbar>
            <Headercarousel></Headercarousel>
            <CourseTab></CourseTab>
            <Footer></Footer>
        </div>
    </div> 
    </>
  )
}

export default Maincourse
