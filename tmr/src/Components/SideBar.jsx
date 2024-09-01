let store = [
    {
        name:"Electronics"
    },
    {
       name:"Furniture"
    },
    {
        name:"Decor"
    }
    ,
    {
        name:'Utensils'
    }
]
let duration = [
    {
        name:"24hrs ago"
    },
    {
       name:"This month"
    },
    {
        name:"3 months ago"
    }
    ,
    {
        name:'6 months ago'
    }
]
let condition = [
    {
        name:"New"
    },
    {
       name:"Mint"
    },
    {
        name:"Old but working"
    }
    ,
    {
        name:'Old not working'
    }
]
export default function SideNav() {
    return (
        <section className="flex flex-col justify-between	w-[20%] h-[700px] text-center border-r-2 border-r-solid border-r-black	">
            <div>
                <h1 className="inter text-2xl"><b>Filter</b> </h1>
                <div className="underline text-[1.43rem]">
                    Category
                </div>
                <div>
                <FilterCheckBox store={store}></FilterCheckBox>
                </div>
            </div>
            
            <div className="p-4">
                <h1 className="inter text-2xl underline"><b>Price Range</b></h1>
                <div>
                    <RangeSlider></RangeSlider>
                </div>
            </div>
            <div>
            <h1 className="inter text-2xl underline"><b>Posted Date</b></h1>
           <FilterCheckBox store={duration} ></FilterCheckBox>
           </div>
           <div>

           </div>
           <div>
            <h1 className="inter text-2xl underline"><b>Condition</b></h1>
           <FilterCheckBox store={condition} ></FilterCheckBox>
           </div>
        </section>

    )
}

function FilterCheckBox({updateState,store=[]}) {
    return (
       <div className="flex flex-col justify-center items-center">
        <ul className="flex flex-col  inter text-[0.875rem] mt-5">
          {
            store.map((value)=>{
                return(
                    <li className="flex text-left" ><input type="checkbox" /><span className="ml-2">{value.name}</span></li>
                )
            })
            // <li className="flex text-left items-center" ><input type="checkbox" /><span className="ml-2">Electronics</span></li>
            // <li className="flex text-left items-center" ><input type="checkbox" /><span className="ml-2">Furniture</span></li>
            // <li className="flex text-left items-center" ><input type="checkbox" /><span className="ml-2">Decor</span></li>
            // <li className="flex text-left items-center" ><input type="checkbox" /><span className="ml-2">Utensils</span></li>
}
        </ul>
        </div>
    )
}
function RangeSlider({ max=10000, min=0, step = 1 }) {
    return (

        <div>
            <input type="range" max={max} min={min} step={step} />
            <div className="relative text-[1rem]"><b className="absolute left-[5px]">Max Rs: 0 </b><b className="absolute right-[3px]">Min Rs: 10000 </b></div>
        </div>
    )

}