

const YoutubeVid = () => {
  return (
    <>
      <div className='max-w-[100%]'>
        <div className='w-[100%]  grid grid-cols-1 mx-auto  '>
            <div>
            <iframe width="500" height="400" src="https://www.youtube.com/embed/FrgH2VMIOf8?si=MCGpHFL6vzULgW5C" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen className="w-[100%]"></iframe>
            </div>
        </div>
      </div>
    </>
  )
}

export default YoutubeVid
