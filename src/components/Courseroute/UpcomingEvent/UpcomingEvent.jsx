
import { UpcomingCardApi } from "../../../API/UpcomingCardApi"
import UpcomingEventCard from "./UpcomingEventCard/UpcomingEventCard"


const UpcomingEvent = () => {
  return (
    <>
        <div className=" max-w-[100%] mx-auto">
            <div className=" w-[99%] mx-auto md:w-[80%] md:mx-0">
                
                <div className=' grid grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 gap-x-5 gap-y-12'>
                    {
                        UpcomingCardApi.map((e,index)=>(
                            <>
                                <div key={index} className="">
                                    <UpcomingEventCard image={e.image} month={e.month} location={e.location} head={e.head} day={e.day} year={e.year} viewdetails={e.viewdetails}/>
                                </div>
                            </>
                        ))
                    }
                </div>
            </div>
        </div>
    </>
  )
}

export default UpcomingEvent