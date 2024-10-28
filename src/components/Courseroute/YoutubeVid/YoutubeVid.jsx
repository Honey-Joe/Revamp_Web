import { Star } from "lucide-react"


const YoutubeVid = () => {
  return (
    <>
      <div className='max-w-[100%]'>
        <div className='w-[100%]  grid grid-cols-1 mx-auto  '>
            <div>
            <iframe width="500" height="400" src="https://www.youtube.com/embed/FrgH2VMIOf8?si=MCGpHFL6vzULgW5C" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen className="w-[100%]"></iframe>
            </div>
            <div className="pt-[40px] flex flex-col gap-1">
              <p className="font-[Poppins] font-semibold text-[32px]">UIUX Mastering Figma</p>
              <div className="flex gap-5">
              <div className="flex gap-1">
                <Star fill="#FF9F00" color="#FF9F00" ></Star>
                <Star fill="#FF9F00" color="#FF9F00"></Star>
                <Star fill="#FF9F00" color="#FF9F00"></Star>
                <Star fill="#FF9F00" color="#FF9F00"></Star>
                <Star fill="#FF9F00" color="#FF9F00"></Star>
              </div>
              <div className="h-[100%] w-[1px] bg-black"></div>
              <div>
                <p className="font-[Poppins] text-[16px]">80 Reviews</p>
              </div>

              </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default YoutubeVid
