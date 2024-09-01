export default function Item({data=[]}){
return(
    <div className="w-[100%]   grid grid-cols-4 gap-12 ml-12">
        {
        data.map((value)=>{
           return(
            <div className="bg-[#F4F5F7]  w-[280px] h-[400px]   ">
            <img src={value.productImage} className="w-[100%] object-cover"/>
            <div className="p-5">
            <div className="text-[#A5560D] inter text-[1.5rem] font-[600] mt-2">{value.name}</div>
            <div className="text-[#898989] inter text-[1rem] font-[500] poppins-regular mt-2">{value.description}</div>
            <div className="flex items-center gap-5 mt-2">
            <div className="text-[#A5560D] inter text-[1.25rem] font-[600] poppins-regular">{value.price}</div>
            <div className="line-through text-[#B0B0B0] text-[1rem] poppins-regular">{value.discount}</div>
            </div>
           </div>
           </div>
           )
        })
       
       } 
    </div>
)
}