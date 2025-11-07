import { useState } from "react";
import Modal from "./Modal";
import { useMutation } from "@tanstack/react-query";
import { createCheckoutReceipt, deleteCart, deleteItemFromCart, queryClient } from "../api/functions";
import { useParams } from "react-router";

export default function Footer({data}: {data: any}) {
  const {id : userId} = useParams();
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const cart = data?.user?.cart;
  const totalItems = cart?.reduce((total: number, item: any)=>total += item.quantity, 0);

  const {mutate: createReceipt} = useMutation({
    mutationFn: async (userId: number, items: any) => createCheckoutReceipt(userId, cart),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['checkout'],
      })
    }
  })

    const {mutate : deleteCartItems} = useMutation({
    mutationFn: (userId: number) => deleteCart(userId),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['checkout', 'cart'],
      })
    }
  })

  const handleCheckOut = () => {
    setIsLoading(true);
    setOpen(true);
    createReceipt(data?.user?.id, cart);
    deleteCart(Number(userId));
    setIsLoading(false);
  }
  
  return (
      <>
        <div className="md:hidden absolute bottom-0 w-full h-[170px] border-t border-gray-200 px-8 py-2 flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between text-lg">
          <p>Total Items :</p>
          <p>{totalItems}</p>
        </div>
        <div className="flex items-center justify-between text-2xl font-semibold">
          <p>Total :</p>
          <p>${Number(data?.totalPrice).toFixed(2)}</p>
        </div>
        </div>
        <div className="flex items-center justify-end pb-5">
          <button
          onClick={handleCheckOut}
           className="btn btn-primary text-white">Checkout</button>
        </div>
      </div>
      <Modal open={open} 
        setOpen={setOpen}
        isLoading={isLoading}
      />
    </>
  )
}
