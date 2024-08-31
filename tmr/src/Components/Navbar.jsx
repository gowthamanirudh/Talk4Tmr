import Logo from "../assets/Logo.svg"
import Menu from "../assets/Menu.svg"
export default function NavBar() {
    return (
        <div className="flex flex-row justify-around items-center gap-[6rem]">
            <ul className="flex flex-row inter justify-center gap-[6rem] text-lg">
                <li>Home</li>
                <li>Shop</li>
                <li>Sell</li>
                <li>Recycle</li>
            </ul>
            <div className="flex flex-row  items-center ">
                <img src={Logo} className="mt-5"  />
            </div>
            <div className="flex flex-row justify-end"> 
                <img src={Menu}/>
            </div>
        </div>
    )
}