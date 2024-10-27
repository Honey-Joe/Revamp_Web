import { ArrowRight, MapPin } from "lucide-react"


const UpcomingEventCard = ({month,day,year,image,location,head,viewdetails}) => {
  return (
    <>
        <div className=" border rounded-2xl" id="certi">
            <div className=" flex  md:items-center p-5 gap-8 flex-wrap lg:flex-nowrap">
                <div className=" flex items-center gap-8">
                    <div>
                        <h1 className=" font-[Regular] text-lg text-slate-600">{month}</h1>
                        <p className=" font-[Regular] text-[38px] border-b-2  w-fit">{day}</p>
                        <p className=" font-[Regular] text-lg text-slate-600">{year}</p>
                    </div>
                    <div>
                        <img src={image} alt="Upcoimg_image" className=" rounded-full w-[150px]"/>
                    </div>
                </div>
                <div className=" flex items-center gap-8 flex-wrap lg:flex-nowrap">
                    <div>
                        <p className=" flex items-center text-wrap font-[Regular] text-sm text-slate-600 gap-1"> <MapPin className=" w-5 fill-[#14C88C] stroke-white "/> {location}</p>
                        <h1 className=" font-[Regular] lg:text-2xl text-base font-bold pt-1 pb-2">{head}</h1>
                        <div className=" flex items-center gap-1">
                            <button className="font-[Regular] text-[#2682F9] font-semibold text-sm " id="line">{viewdetails} </button>
                            <ArrowRight className=" w-4 stroke-2  stroke-[#2682F9]"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default UpcomingEventCard