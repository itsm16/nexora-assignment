import Products from "../components/Products";
import { useParams } from "react-router";

export default function ProductsPage() {
  const {id} = useParams();

  return (
    <div className="bg-white">
      {/* Products */}
      <div className="border border-t-0 flex justify-center text-white">
        <Products userId={Number(id!)} />
      </div>
    </div>    
  )
}
