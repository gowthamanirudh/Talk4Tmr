import hall from "../assets/hall.png"
export default function MainContent(){
    return(
     <div className="flex justify-end pr-10">
        <img src={hall} className="w-[90%] h-[700px] rounded-[68px]"/>
        <div className="w-[616px] h-[378px] bg-white absolute left-[60px] bottom-[-250px]   rounded-tr-[100px]">
            <div className="text-[7.5rem] leading-[150px] 	inter ">
                <h1>
                <b className="italic">Un</b><b className="text-[#A5560D] font-[500] italic">earth</b>
                </h1>
                <h1><b className="italic text-[#A5560D]">Rare</b> <b className="italic">finds</b></h1>
              
            </div>
            <h1 className="text-4xl italic font-[500] ">Where History Meets Elegance</h1>
        </div>
     </div>
    )
}