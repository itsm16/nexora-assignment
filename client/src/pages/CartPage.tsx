import { useMutation, useQuery } from "@tanstack/react-query";
import { useParams } from "react-router"
import { deleteItemFromCart, getUser, queryClient, updateItemQuantity } from "../api/functions";
import Footer from "../components/Footer";

type item = {
    cartId: number,
    itemName: string,
    price: number,
    productId: number,
    quantity: number
}

export default function CartPage() {
  const { id: userId } = useParams();

  const {mutate : updateQuantity} = useMutation({
    mutationFn: ({cartId, quantity}: {cartId: number, quantity: number}) => updateItemQuantity(cartId, quantity),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['cart'],
      })
    }
  })

  const {mutate : deleteItem} = useMutation({
    mutationFn: (cartId: number) => deleteItemFromCart(cartId),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['cart'],
      })
    }
  })

  const { data, isLoading, error } = useQuery({
    queryFn: () => getUser(Number(userId)),
    queryKey: ['cart', 'checkout'],
  })

  const handleIncrement = (item: item) => {
    let quantity = item.quantity;
    quantity = quantity + 1;
    updateQuantity({cartId: item.cartId, quantity: quantity});
  }

  const handleDecrement = (item: item) => {
    let quantity = item.quantity;
    quantity = quantity - 1;
    updateQuantity({cartId: item.cartId, quantity: quantity});
  }

  const handleDelete = (cartId: number) => {
    deleteItem(cartId);
  }

  return (
    <div className="bg-white text-black flex md:flex-row flex-col py-5" style={{ height: "calc(100vh - 65px" }}>
      {/* Quantity table */}
      <div className="md:w-[60%] w-full border-gray-200 border-r text-black">
        
        {data?.addedItems?.length == 0 && 
        <p className="text-center text-2xl font-semibold">No items in cart</p>}

        {data?.addedItems?.length > 0 && 
        <table className="table ">
          <thead className="text-black">
            <tr>
              <th>Name</th>
              <th>Quantity</th>
              <th>Price</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {data?.addedItems.map((item: any) => (
              <tr key={item.cartId}>
                <td>{item.itemName}</td>
                <td><div className="flex items-center gap-3">
                  <button
                  onClick={() => handleIncrement(item)}
                  className="btn btn-square btn-xs text-white">+</button>
                  <p className="font-semibold">{item.quantity}</p>
                  {item.quantity > 1 && <button onClick={() => handleDecrement(item)} className="btn btn-square btn-xs text-white">-</button>}
                </div></td>
                <td>${item.price}</td>
                <td>
                  <button
                  onClick={()=>handleDelete(item.cartId)}
                  className="btn btn-square btn-sm text-white">x</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        }
      </div>

      {/* Right */}
      <div className="h-full w-[40%] hidden md:block">
        <div className="flex flex-col gap-4 h-[50%] w-full mt-12 px-4">
          <div className="flex flex-col w-full">
            <div className="flex w-full text-xl font-semibold justify-between">
              <p>Total Items</p>
              <p>{data?.addedItems.length}</p>
            </div>
            <div className="flex w-full text-2xl font-semibold justify-between">
              <p>Total Price</p>
              <p>${Number(data?.totalPrice).toFixed(2)}</p>
            </div>
          </div>
          <div className="flex items-center justify-end">
            <button className="btn btn-primary text-white">Checkout</button>
          </div>
        </div>
      </div>

      {/* Mobile */}
      <Footer data={data} />
    </div>
  )
}
