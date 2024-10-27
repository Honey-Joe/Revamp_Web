import { Folders,UserRound, Heart, Star, ArrowRight,Share } from "lucide-react"

const FindCourseCard = ({float,name,lesson,price,cart,rating,student,profile,image,domain,title}) => {
  return (
    <>
        <div>
            <div className="">
                <div className=" bg-white shadow-2xl border rounded-3xl  pb-4 relative">
                    <div className=" relative p-3">
                        <div className=" relative w-full">
                            <img src={image} alt="Course_image" className=" rounded-2xl w-full" />
                            <p className=" bg-[#FF9F00] text-white px-2 py-1 w-fit rounded-md font-bold  font-[Regular] text-sm absolute top-8 left-8">{float}</p>
                        </div>
                        <div className=" absolute w-full -bottom-1">
                            <div className=" flex items-center gap-2 justify-between px-8">
                                <div className=" flex items-center shadow-lg border px-3 py-1 rounded-3xl bg-white gap-1">
                                    <div className=" flex items-center ">
                                        <Star className=" w-4 stroke-[#ED9700] fill-[#ED9700]"/>
                                        <Star className=" w-4 stroke-[#ED9700] fill-[#ED9700]"/>
                                        <Star className=" w-4 stroke-[#ED9700] fill-[#ED9700]"/>
                                        <Star className=" w-4 stroke-[#ED9700] fill-[#ED9700]"/>
                                        <Star className=" w-4 stroke-[#ED9700] fill-[#ED9700]"/>
                                    </div>
                                    <p>{rating}</p>
                                </div>
                                <div className=" hover:cursor-pointer">
                                    <Share className=" w-9 h-9 bg-white shadow-lg border p-2 rounded-full"/>    
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className=" px-8 pt-6">
                        <div className=" flex items-center gap-2">
                            <img src={profile} alt="Course_profile_image" className=" rounded-full w-8" />
                            <p className=" font-[Regular]"> <span className=" text-[#FF9F00]">{name}</span> {domain}</p>
                        </div>
                        <h1 className=" font-[Regular] md:text-xl text-lg font-bold py-3">{title}</h1>
                        <div className=" flex items-center gap-4">
                            <div className=" flex items-center gap-1">
                                <UserRound className=" w-5 fill-[#FF9F00] stroke-[#FF9F00]"/>
                                <p className=" font-[Regular] text-slate-600 text-nowrap">{student}</p>
                            </div>
                            <div className=" flex items-center gap-1">
                                <Folders className=" w-5 fill-[#FF9F00] stroke-[#FF9F00]"/>
                                <p className=" font-[Regular] text-slate-600 text-nowrap">{lesson}</p>
                            </div>
                        </div>
                        <div className=" py-4">
                            <div className=" flex items-center bg-[#F5F6FA] rounded-md shadow-2xl justify-between py-3 px-5  relative">
                                <h3 className=" font-[Regular] font-bold text-sm">{price}</h3>
                                <div className=" absolute -top-2 right-0">
                                    <button className=" flex items-center font-[Regular] font-bold bg-black hover:bg-[#FF9F00] px-3 py-2 transition-colors rounded-lg text-white text-sm">{cart}<ArrowRight className=" w-5"/></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default FindCourseCard