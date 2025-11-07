import { useQuery } from '@tanstack/react-query';
import { IoBagHandleOutline } from 'react-icons/io5'
import { useNavigate } from 'react-router'
import { getUser } from '../api/functions';
import { useParams } from 'react-router';

export default function Cart() {
    const {id: userId} = useParams();
    const navigate = useNavigate();

    const {data} = useQuery({
        queryFn: () => getUser(Number(userId)),
        queryKey: ['cart'],
    })

    const quantity = data?.user?.cart?.reduce((total: number, item: any) => {
        return total + item.quantity;
    }, 0);

    function iconClick(){
        navigate(`/cart/${userId}`)
    }

    return (
        <div className='relative cursor-pointer h-8 w-8 flex items-center justify-center' onClick={iconClick}>
            <IoBagHandleOutline size={24} />
            <p className='bg-primary rounded-full flex items-center justify-center p-[5px] w-4 h-4 font-semibold text-white absolute top-1 right-[-1px] text-xs'>{quantity}</p>
        </div>
    )
}
