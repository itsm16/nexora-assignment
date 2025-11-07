import { Link } from "react-router";
import Cart from "./Cart";

export default function Nav({id}: {id: number}) {
  return (
    <div className="nav h-[65px] bg-white text-black flex border-gray-200 border-b z-99 fixed w-full justify-center">
        <div className="lg:w-[60%] bg-white w-full flex items-center justify-between px-10">
            <Link className="font-semibold" to="/4">Home</Link>
          <Cart userId={id} />
        </div>
      </div>
  )
}
