import { useMutation } from "@tanstack/react-query";
import { postProductToCart, queryClient } from "../api/functions";

export default function Card({title, price, image, id, userId}: {title: string, price: number, image: string, description: string, id: number, userId: number}) {
    const { mutate: addToCartMutation } = useMutation({
        mutationFn: () => postProductToCart(userId, id),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['cart'],
            })
        }
    });

    function addToCart(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault();
        addToCartMutation();
    }

    return (
        <div className="card bg-transparent border text-black w-80 shadow-sm">
            <div className="card-body">
                <div className="flex w-full justify-between gap-2">
                <h2 className="card-title textarea-md">{title}</h2>
                    <div className="flex items-center gap-3">
                        <h2 className="font-bold">${price}</h2>
                        <button
                        onClick={addToCart}
                        className="btn btn-primary btn-sm text-lg">+</button>
                    </div>
                </div>
            </div>
            <figure>
                <img
                    className="w-[50%] h-[70%]"
                    src={image}
                    alt="" />
            </figure>
        </div>
    )
}
