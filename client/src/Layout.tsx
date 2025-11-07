import { Outlet, useParams } from "react-router";
import Nav from "./components/Nav";

export default function Layout() {
    const { id } = useParams()
    return (
        <>
            <div className="h-[65px]">
                <Nav id={Number(id)} />
            </div>
            <div className="">
                <Outlet />
            </div>
        </>
    )
}
