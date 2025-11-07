import { useQuery } from "@tanstack/react-query";
import { getReceipt } from "../api/functions";
import { useParams } from "react-router";


type ModalProps = {
    open: boolean;
    setOpen: (open: boolean) => void;
    isLoading: boolean;
}

export default function Modal({open, setOpen, isLoading}: ModalProps) {
    const {id} = useParams();

    const {data, isLoading: isReceiptLoading} = useQuery({
        queryFn: () => getReceipt(Number(id)),
        queryKey: ['checkout'],
    })

    return (
    <dialog className={`modal ${open ? 'modal-open' : ''}`}>
        <div className="modal-box w-[400px] bg-white text-black">
            <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button 
                onClick={() => setOpen(false)}
                className="btn btn-xs btn-circle btn-ghost absolute right-2 top-2">✕</button>
                {isLoading && (
                    <div className='flex items-center justify-center'>
                        <p className='loading loading-dots'></p>
                    </div>
                )}
                {!isLoading && (
                    <div className='mt-5 transition-all duration-500'>
                        <div className='text-center bg-black text-white text-lg font-semibold p-2 rounded-md'>Successfully Checked Out</div>
                        <div>
                            <div>
                                {/* <p>Total Items :</p>
                                <p>{items.length}</p> */}
                            </div>
                            <div></div>
                        </div>
                    </div>
                )}
                {isReceiptLoading && (
                    <div className='flex items-center justify-center mt-5'>
                        <p className='loading loading-dots'></p>
                    </div>
                )}
                <div className="w-full mt-6">
                    <div>
                        <p>Items</p>
                        {data?.receipt?.receipt?.map((item: any) => (
                            <div key={item.id} className="flex justify-between gap-3">
                                <p>{item.product.name} - {item.quantity}</p>
                                <p>${item.price}</p>
                            </div>
                        ))}
                    </div>
                    <div className="flex w-full justify-between text-lg font-semibold">
                        <p>Total :</p>
                        <p>${data?.total}</p>
                    </div>
                </div>
            </form>
        </div>
    </dialog>
  )
}
