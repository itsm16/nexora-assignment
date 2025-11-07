
import Card from './Card';
import { useQuery } from '@tanstack/react-query';
import { getApiProducts, getProducts } from '../api/functions';

export default function Products({userId}: {userId: number}) {

    const { data, isLoading, error } = useQuery({
        queryKey: ['products'],
        queryFn: getApiProducts
    })

    const { data: productsData, isLoading: productsLoading, error: productsError } = useQuery({
        queryKey: ['api-products'],
        queryFn: getProducts
    })

    return (
        <div className="lg:w-[60%] p-1 border flex flex-wrap gap-2 justify-center">
            {error || productsError && <p className='text-red-500 mt-10 self-center'>Error fetching products</p>}


            {isLoading || productsLoading && <p className='text-black loading loading-spinner my-5 self-center'></p>}

            
            {data?.map((product: any) => (
                <Card key={product.id} id={product.id} userId={userId} title={product.title} price={product.price} image={product.image} description={product.description} />
            ))}

            {productsData?.map((product: any) => (
                <Card key={product.id} id={product.id} userId={userId} title={product.name} price={product.price} image={product.image} description={product.description} />
            ))}
        </div>
    )
}
