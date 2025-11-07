import type * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model cartItems
 *
 */
export type cartItemsModel = runtime.Types.Result.DefaultSelection<Prisma.$cartItemsPayload>;
export type AggregateCartItems = {
    _count: CartItemsCountAggregateOutputType | null;
    _avg: CartItemsAvgAggregateOutputType | null;
    _sum: CartItemsSumAggregateOutputType | null;
    _min: CartItemsMinAggregateOutputType | null;
    _max: CartItemsMaxAggregateOutputType | null;
};
export type CartItemsAvgAggregateOutputType = {
    id: number | null;
    userId: number | null;
    productId: number | null;
    quantity: number | null;
};
export type CartItemsSumAggregateOutputType = {
    id: number | null;
    userId: number | null;
    productId: number | null;
    quantity: number | null;
};
export type CartItemsMinAggregateOutputType = {
    id: number | null;
    userId: number | null;
    productId: number | null;
    quantity: number | null;
};
export type CartItemsMaxAggregateOutputType = {
    id: number | null;
    userId: number | null;
    productId: number | null;
    quantity: number | null;
};
export type CartItemsCountAggregateOutputType = {
    id: number;
    userId: number;
    productId: number;
    quantity: number;
    _all: number;
};
export type CartItemsAvgAggregateInputType = {
    id?: true;
    userId?: true;
    productId?: true;
    quantity?: true;
};
export type CartItemsSumAggregateInputType = {
    id?: true;
    userId?: true;
    productId?: true;
    quantity?: true;
};
export type CartItemsMinAggregateInputType = {
    id?: true;
    userId?: true;
    productId?: true;
    quantity?: true;
};
export type CartItemsMaxAggregateInputType = {
    id?: true;
    userId?: true;
    productId?: true;
    quantity?: true;
};
export type CartItemsCountAggregateInputType = {
    id?: true;
    userId?: true;
    productId?: true;
    quantity?: true;
    _all?: true;
};
export type CartItemsAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which cartItems to aggregate.
     */
    where?: Prisma.cartItemsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of cartItems to fetch.
     */
    orderBy?: Prisma.cartItemsOrderByWithRelationInput | Prisma.cartItemsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.cartItemsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` cartItems from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` cartItems.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned cartItems
    **/
    _count?: true | CartItemsCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: CartItemsAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: CartItemsSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: CartItemsMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: CartItemsMaxAggregateInputType;
};
export type GetCartItemsAggregateType<T extends CartItemsAggregateArgs> = {
    [P in keyof T & keyof AggregateCartItems]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateCartItems[P]> : Prisma.GetScalarType<T[P], AggregateCartItems[P]>;
};
export type cartItemsGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.cartItemsWhereInput;
    orderBy?: Prisma.cartItemsOrderByWithAggregationInput | Prisma.cartItemsOrderByWithAggregationInput[];
    by: Prisma.CartItemsScalarFieldEnum[] | Prisma.CartItemsScalarFieldEnum;
    having?: Prisma.cartItemsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CartItemsCountAggregateInputType | true;
    _avg?: CartItemsAvgAggregateInputType;
    _sum?: CartItemsSumAggregateInputType;
    _min?: CartItemsMinAggregateInputType;
    _max?: CartItemsMaxAggregateInputType;
};
export type CartItemsGroupByOutputType = {
    id: number;
    userId: number;
    productId: number;
    quantity: number;
    _count: CartItemsCountAggregateOutputType | null;
    _avg: CartItemsAvgAggregateOutputType | null;
    _sum: CartItemsSumAggregateOutputType | null;
    _min: CartItemsMinAggregateOutputType | null;
    _max: CartItemsMaxAggregateOutputType | null;
};
type GetCartItemsGroupByPayload<T extends cartItemsGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<CartItemsGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof CartItemsGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], CartItemsGroupByOutputType[P]> : Prisma.GetScalarType<T[P], CartItemsGroupByOutputType[P]>;
}>>;
export type cartItemsWhereInput = {
    AND?: Prisma.cartItemsWhereInput | Prisma.cartItemsWhereInput[];
    OR?: Prisma.cartItemsWhereInput[];
    NOT?: Prisma.cartItemsWhereInput | Prisma.cartItemsWhereInput[];
    id?: Prisma.IntFilter<"cartItems"> | number;
    userId?: Prisma.IntFilter<"cartItems"> | number;
    productId?: Prisma.IntFilter<"cartItems"> | number;
    quantity?: Prisma.IntFilter<"cartItems"> | number;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    product?: Prisma.XOR<Prisma.ProductsScalarRelationFilter, Prisma.ProductsWhereInput>;
};
export type cartItemsOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    productId?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    user?: Prisma.UserOrderByWithRelationInput;
    product?: Prisma.ProductsOrderByWithRelationInput;
};
export type cartItemsWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    userId_productId?: Prisma.cartItemsUserIdProductIdCompoundUniqueInput;
    AND?: Prisma.cartItemsWhereInput | Prisma.cartItemsWhereInput[];
    OR?: Prisma.cartItemsWhereInput[];
    NOT?: Prisma.cartItemsWhereInput | Prisma.cartItemsWhereInput[];
    userId?: Prisma.IntFilter<"cartItems"> | number;
    productId?: Prisma.IntFilter<"cartItems"> | number;
    quantity?: Prisma.IntFilter<"cartItems"> | number;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    product?: Prisma.XOR<Prisma.ProductsScalarRelationFilter, Prisma.ProductsWhereInput>;
}, "id" | "userId_productId">;
export type cartItemsOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    productId?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    _count?: Prisma.cartItemsCountOrderByAggregateInput;
    _avg?: Prisma.cartItemsAvgOrderByAggregateInput;
    _max?: Prisma.cartItemsMaxOrderByAggregateInput;
    _min?: Prisma.cartItemsMinOrderByAggregateInput;
    _sum?: Prisma.cartItemsSumOrderByAggregateInput;
};
export type cartItemsScalarWhereWithAggregatesInput = {
    AND?: Prisma.cartItemsScalarWhereWithAggregatesInput | Prisma.cartItemsScalarWhereWithAggregatesInput[];
    OR?: Prisma.cartItemsScalarWhereWithAggregatesInput[];
    NOT?: Prisma.cartItemsScalarWhereWithAggregatesInput | Prisma.cartItemsScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"cartItems"> | number;
    userId?: Prisma.IntWithAggregatesFilter<"cartItems"> | number;
    productId?: Prisma.IntWithAggregatesFilter<"cartItems"> | number;
    quantity?: Prisma.IntWithAggregatesFilter<"cartItems"> | number;
};
export type cartItemsCreateInput = {
    quantity: number;
    user: Prisma.UserCreateNestedOneWithoutCartInput;
    product: Prisma.ProductsCreateNestedOneWithoutCartInput;
};
export type cartItemsUncheckedCreateInput = {
    id?: number;
    userId: number;
    productId: number;
    quantity: number;
};
export type cartItemsUpdateInput = {
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    user?: Prisma.UserUpdateOneRequiredWithoutCartNestedInput;
    product?: Prisma.ProductsUpdateOneRequiredWithoutCartNestedInput;
};
export type cartItemsUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
    productId?: Prisma.IntFieldUpdateOperationsInput | number;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type cartItemsCreateManyInput = {
    id?: number;
    userId: number;
    productId: number;
    quantity: number;
};
export type cartItemsUpdateManyMutationInput = {
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type cartItemsUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
    productId?: Prisma.IntFieldUpdateOperationsInput | number;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type CartItemsListRelationFilter = {
    every?: Prisma.cartItemsWhereInput;
    some?: Prisma.cartItemsWhereInput;
    none?: Prisma.cartItemsWhereInput;
};
export type cartItemsOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type cartItemsUserIdProductIdCompoundUniqueInput = {
    userId: number;
    productId: number;
};
export type cartItemsCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    productId?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
};
export type cartItemsAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    productId?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
};
export type cartItemsMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    productId?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
};
export type cartItemsMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    productId?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
};
export type cartItemsSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    productId?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
};
export type cartItemsCreateNestedManyWithoutProductInput = {
    create?: Prisma.XOR<Prisma.cartItemsCreateWithoutProductInput, Prisma.cartItemsUncheckedCreateWithoutProductInput> | Prisma.cartItemsCreateWithoutProductInput[] | Prisma.cartItemsUncheckedCreateWithoutProductInput[];
    connectOrCreate?: Prisma.cartItemsCreateOrConnectWithoutProductInput | Prisma.cartItemsCreateOrConnectWithoutProductInput[];
    createMany?: Prisma.cartItemsCreateManyProductInputEnvelope;
    connect?: Prisma.cartItemsWhereUniqueInput | Prisma.cartItemsWhereUniqueInput[];
};
export type cartItemsUncheckedCreateNestedManyWithoutProductInput = {
    create?: Prisma.XOR<Prisma.cartItemsCreateWithoutProductInput, Prisma.cartItemsUncheckedCreateWithoutProductInput> | Prisma.cartItemsCreateWithoutProductInput[] | Prisma.cartItemsUncheckedCreateWithoutProductInput[];
    connectOrCreate?: Prisma.cartItemsCreateOrConnectWithoutProductInput | Prisma.cartItemsCreateOrConnectWithoutProductInput[];
    createMany?: Prisma.cartItemsCreateManyProductInputEnvelope;
    connect?: Prisma.cartItemsWhereUniqueInput | Prisma.cartItemsWhereUniqueInput[];
};
export type cartItemsUpdateManyWithoutProductNestedInput = {
    create?: Prisma.XOR<Prisma.cartItemsCreateWithoutProductInput, Prisma.cartItemsUncheckedCreateWithoutProductInput> | Prisma.cartItemsCreateWithoutProductInput[] | Prisma.cartItemsUncheckedCreateWithoutProductInput[];
    connectOrCreate?: Prisma.cartItemsCreateOrConnectWithoutProductInput | Prisma.cartItemsCreateOrConnectWithoutProductInput[];
    upsert?: Prisma.cartItemsUpsertWithWhereUniqueWithoutProductInput | Prisma.cartItemsUpsertWithWhereUniqueWithoutProductInput[];
    createMany?: Prisma.cartItemsCreateManyProductInputEnvelope;
    set?: Prisma.cartItemsWhereUniqueInput | Prisma.cartItemsWhereUniqueInput[];
    disconnect?: Prisma.cartItemsWhereUniqueInput | Prisma.cartItemsWhereUniqueInput[];
    delete?: Prisma.cartItemsWhereUniqueInput | Prisma.cartItemsWhereUniqueInput[];
    connect?: Prisma.cartItemsWhereUniqueInput | Prisma.cartItemsWhereUniqueInput[];
    update?: Prisma.cartItemsUpdateWithWhereUniqueWithoutProductInput | Prisma.cartItemsUpdateWithWhereUniqueWithoutProductInput[];
    updateMany?: Prisma.cartItemsUpdateManyWithWhereWithoutProductInput | Prisma.cartItemsUpdateManyWithWhereWithoutProductInput[];
    deleteMany?: Prisma.cartItemsScalarWhereInput | Prisma.cartItemsScalarWhereInput[];
};
export type cartItemsUncheckedUpdateManyWithoutProductNestedInput = {
    create?: Prisma.XOR<Prisma.cartItemsCreateWithoutProductInput, Prisma.cartItemsUncheckedCreateWithoutProductInput> | Prisma.cartItemsCreateWithoutProductInput[] | Prisma.cartItemsUncheckedCreateWithoutProductInput[];
    connectOrCreate?: Prisma.cartItemsCreateOrConnectWithoutProductInput | Prisma.cartItemsCreateOrConnectWithoutProductInput[];
    upsert?: Prisma.cartItemsUpsertWithWhereUniqueWithoutProductInput | Prisma.cartItemsUpsertWithWhereUniqueWithoutProductInput[];
    createMany?: Prisma.cartItemsCreateManyProductInputEnvelope;
    set?: Prisma.cartItemsWhereUniqueInput | Prisma.cartItemsWhereUniqueInput[];
    disconnect?: Prisma.cartItemsWhereUniqueInput | Prisma.cartItemsWhereUniqueInput[];
    delete?: Prisma.cartItemsWhereUniqueInput | Prisma.cartItemsWhereUniqueInput[];
    connect?: Prisma.cartItemsWhereUniqueInput | Prisma.cartItemsWhereUniqueInput[];
    update?: Prisma.cartItemsUpdateWithWhereUniqueWithoutProductInput | Prisma.cartItemsUpdateWithWhereUniqueWithoutProductInput[];
    updateMany?: Prisma.cartItemsUpdateManyWithWhereWithoutProductInput | Prisma.cartItemsUpdateManyWithWhereWithoutProductInput[];
    deleteMany?: Prisma.cartItemsScalarWhereInput | Prisma.cartItemsScalarWhereInput[];
};
export type cartItemsCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.cartItemsCreateWithoutUserInput, Prisma.cartItemsUncheckedCreateWithoutUserInput> | Prisma.cartItemsCreateWithoutUserInput[] | Prisma.cartItemsUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.cartItemsCreateOrConnectWithoutUserInput | Prisma.cartItemsCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.cartItemsCreateManyUserInputEnvelope;
    connect?: Prisma.cartItemsWhereUniqueInput | Prisma.cartItemsWhereUniqueInput[];
};
export type cartItemsUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.cartItemsCreateWithoutUserInput, Prisma.cartItemsUncheckedCreateWithoutUserInput> | Prisma.cartItemsCreateWithoutUserInput[] | Prisma.cartItemsUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.cartItemsCreateOrConnectWithoutUserInput | Prisma.cartItemsCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.cartItemsCreateManyUserInputEnvelope;
    connect?: Prisma.cartItemsWhereUniqueInput | Prisma.cartItemsWhereUniqueInput[];
};
export type cartItemsUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.cartItemsCreateWithoutUserInput, Prisma.cartItemsUncheckedCreateWithoutUserInput> | Prisma.cartItemsCreateWithoutUserInput[] | Prisma.cartItemsUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.cartItemsCreateOrConnectWithoutUserInput | Prisma.cartItemsCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.cartItemsUpsertWithWhereUniqueWithoutUserInput | Prisma.cartItemsUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.cartItemsCreateManyUserInputEnvelope;
    set?: Prisma.cartItemsWhereUniqueInput | Prisma.cartItemsWhereUniqueInput[];
    disconnect?: Prisma.cartItemsWhereUniqueInput | Prisma.cartItemsWhereUniqueInput[];
    delete?: Prisma.cartItemsWhereUniqueInput | Prisma.cartItemsWhereUniqueInput[];
    connect?: Prisma.cartItemsWhereUniqueInput | Prisma.cartItemsWhereUniqueInput[];
    update?: Prisma.cartItemsUpdateWithWhereUniqueWithoutUserInput | Prisma.cartItemsUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.cartItemsUpdateManyWithWhereWithoutUserInput | Prisma.cartItemsUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.cartItemsScalarWhereInput | Prisma.cartItemsScalarWhereInput[];
};
export type cartItemsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.cartItemsCreateWithoutUserInput, Prisma.cartItemsUncheckedCreateWithoutUserInput> | Prisma.cartItemsCreateWithoutUserInput[] | Prisma.cartItemsUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.cartItemsCreateOrConnectWithoutUserInput | Prisma.cartItemsCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.cartItemsUpsertWithWhereUniqueWithoutUserInput | Prisma.cartItemsUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.cartItemsCreateManyUserInputEnvelope;
    set?: Prisma.cartItemsWhereUniqueInput | Prisma.cartItemsWhereUniqueInput[];
    disconnect?: Prisma.cartItemsWhereUniqueInput | Prisma.cartItemsWhereUniqueInput[];
    delete?: Prisma.cartItemsWhereUniqueInput | Prisma.cartItemsWhereUniqueInput[];
    connect?: Prisma.cartItemsWhereUniqueInput | Prisma.cartItemsWhereUniqueInput[];
    update?: Prisma.cartItemsUpdateWithWhereUniqueWithoutUserInput | Prisma.cartItemsUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.cartItemsUpdateManyWithWhereWithoutUserInput | Prisma.cartItemsUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.cartItemsScalarWhereInput | Prisma.cartItemsScalarWhereInput[];
};
export type cartItemsCreateWithoutProductInput = {
    quantity: number;
    user: Prisma.UserCreateNestedOneWithoutCartInput;
};
export type cartItemsUncheckedCreateWithoutProductInput = {
    id?: number;
    userId: number;
    quantity: number;
};
export type cartItemsCreateOrConnectWithoutProductInput = {
    where: Prisma.cartItemsWhereUniqueInput;
    create: Prisma.XOR<Prisma.cartItemsCreateWithoutProductInput, Prisma.cartItemsUncheckedCreateWithoutProductInput>;
};
export type cartItemsCreateManyProductInputEnvelope = {
    data: Prisma.cartItemsCreateManyProductInput | Prisma.cartItemsCreateManyProductInput[];
    skipDuplicates?: boolean;
};
export type cartItemsUpsertWithWhereUniqueWithoutProductInput = {
    where: Prisma.cartItemsWhereUniqueInput;
    update: Prisma.XOR<Prisma.cartItemsUpdateWithoutProductInput, Prisma.cartItemsUncheckedUpdateWithoutProductInput>;
    create: Prisma.XOR<Prisma.cartItemsCreateWithoutProductInput, Prisma.cartItemsUncheckedCreateWithoutProductInput>;
};
export type cartItemsUpdateWithWhereUniqueWithoutProductInput = {
    where: Prisma.cartItemsWhereUniqueInput;
    data: Prisma.XOR<Prisma.cartItemsUpdateWithoutProductInput, Prisma.cartItemsUncheckedUpdateWithoutProductInput>;
};
export type cartItemsUpdateManyWithWhereWithoutProductInput = {
    where: Prisma.cartItemsScalarWhereInput;
    data: Prisma.XOR<Prisma.cartItemsUpdateManyMutationInput, Prisma.cartItemsUncheckedUpdateManyWithoutProductInput>;
};
export type cartItemsScalarWhereInput = {
    AND?: Prisma.cartItemsScalarWhereInput | Prisma.cartItemsScalarWhereInput[];
    OR?: Prisma.cartItemsScalarWhereInput[];
    NOT?: Prisma.cartItemsScalarWhereInput | Prisma.cartItemsScalarWhereInput[];
    id?: Prisma.IntFilter<"cartItems"> | number;
    userId?: Prisma.IntFilter<"cartItems"> | number;
    productId?: Prisma.IntFilter<"cartItems"> | number;
    quantity?: Prisma.IntFilter<"cartItems"> | number;
};
export type cartItemsCreateWithoutUserInput = {
    quantity: number;
    product: Prisma.ProductsCreateNestedOneWithoutCartInput;
};
export type cartItemsUncheckedCreateWithoutUserInput = {
    id?: number;
    productId: number;
    quantity: number;
};
export type cartItemsCreateOrConnectWithoutUserInput = {
    where: Prisma.cartItemsWhereUniqueInput;
    create: Prisma.XOR<Prisma.cartItemsCreateWithoutUserInput, Prisma.cartItemsUncheckedCreateWithoutUserInput>;
};
export type cartItemsCreateManyUserInputEnvelope = {
    data: Prisma.cartItemsCreateManyUserInput | Prisma.cartItemsCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type cartItemsUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.cartItemsWhereUniqueInput;
    update: Prisma.XOR<Prisma.cartItemsUpdateWithoutUserInput, Prisma.cartItemsUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.cartItemsCreateWithoutUserInput, Prisma.cartItemsUncheckedCreateWithoutUserInput>;
};
export type cartItemsUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.cartItemsWhereUniqueInput;
    data: Prisma.XOR<Prisma.cartItemsUpdateWithoutUserInput, Prisma.cartItemsUncheckedUpdateWithoutUserInput>;
};
export type cartItemsUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.cartItemsScalarWhereInput;
    data: Prisma.XOR<Prisma.cartItemsUpdateManyMutationInput, Prisma.cartItemsUncheckedUpdateManyWithoutUserInput>;
};
export type cartItemsCreateManyProductInput = {
    id?: number;
    userId: number;
    quantity: number;
};
export type cartItemsUpdateWithoutProductInput = {
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    user?: Prisma.UserUpdateOneRequiredWithoutCartNestedInput;
};
export type cartItemsUncheckedUpdateWithoutProductInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type cartItemsUncheckedUpdateManyWithoutProductInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type cartItemsCreateManyUserInput = {
    id?: number;
    productId: number;
    quantity: number;
};
export type cartItemsUpdateWithoutUserInput = {
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    product?: Prisma.ProductsUpdateOneRequiredWithoutCartNestedInput;
};
export type cartItemsUncheckedUpdateWithoutUserInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    productId?: Prisma.IntFieldUpdateOperationsInput | number;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type cartItemsUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    productId?: Prisma.IntFieldUpdateOperationsInput | number;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type cartItemsSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    productId?: boolean;
    quantity?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    product?: boolean | Prisma.ProductsDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["cartItems"]>;
export type cartItemsSelectScalar = {
    id?: boolean;
    userId?: boolean;
    productId?: boolean;
    quantity?: boolean;
};
export type cartItemsOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "userId" | "productId" | "quantity", ExtArgs["result"]["cartItems"]>;
export type cartItemsInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    product?: boolean | Prisma.ProductsDefaultArgs<ExtArgs>;
};
export type $cartItemsPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "cartItems";
    objects: {
        user: Prisma.$UserPayload<ExtArgs>;
        product: Prisma.$ProductsPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        userId: number;
        productId: number;
        quantity: number;
    }, ExtArgs["result"]["cartItems"]>;
    composites: {};
};
export type cartItemsGetPayload<S extends boolean | null | undefined | cartItemsDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$cartItemsPayload, S>;
export type cartItemsCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<cartItemsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: CartItemsCountAggregateInputType | true;
};
export interface cartItemsDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['cartItems'];
        meta: {
            name: 'cartItems';
        };
    };
    /**
     * Find zero or one CartItems that matches the filter.
     * @param {cartItemsFindUniqueArgs} args - Arguments to find a CartItems
     * @example
     * // Get one CartItems
     * const cartItems = await prisma.cartItems.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends cartItemsFindUniqueArgs>(args: Prisma.SelectSubset<T, cartItemsFindUniqueArgs<ExtArgs>>): Prisma.Prisma__cartItemsClient<runtime.Types.Result.GetResult<Prisma.$cartItemsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one CartItems that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {cartItemsFindUniqueOrThrowArgs} args - Arguments to find a CartItems
     * @example
     * // Get one CartItems
     * const cartItems = await prisma.cartItems.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends cartItemsFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, cartItemsFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__cartItemsClient<runtime.Types.Result.GetResult<Prisma.$cartItemsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first CartItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cartItemsFindFirstArgs} args - Arguments to find a CartItems
     * @example
     * // Get one CartItems
     * const cartItems = await prisma.cartItems.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends cartItemsFindFirstArgs>(args?: Prisma.SelectSubset<T, cartItemsFindFirstArgs<ExtArgs>>): Prisma.Prisma__cartItemsClient<runtime.Types.Result.GetResult<Prisma.$cartItemsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first CartItems that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cartItemsFindFirstOrThrowArgs} args - Arguments to find a CartItems
     * @example
     * // Get one CartItems
     * const cartItems = await prisma.cartItems.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends cartItemsFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, cartItemsFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__cartItemsClient<runtime.Types.Result.GetResult<Prisma.$cartItemsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more CartItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cartItemsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CartItems
     * const cartItems = await prisma.cartItems.findMany()
     *
     * // Get first 10 CartItems
     * const cartItems = await prisma.cartItems.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const cartItemsWithIdOnly = await prisma.cartItems.findMany({ select: { id: true } })
     *
     */
    findMany<T extends cartItemsFindManyArgs>(args?: Prisma.SelectSubset<T, cartItemsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$cartItemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a CartItems.
     * @param {cartItemsCreateArgs} args - Arguments to create a CartItems.
     * @example
     * // Create one CartItems
     * const CartItems = await prisma.cartItems.create({
     *   data: {
     *     // ... data to create a CartItems
     *   }
     * })
     *
     */
    create<T extends cartItemsCreateArgs>(args: Prisma.SelectSubset<T, cartItemsCreateArgs<ExtArgs>>): Prisma.Prisma__cartItemsClient<runtime.Types.Result.GetResult<Prisma.$cartItemsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many CartItems.
     * @param {cartItemsCreateManyArgs} args - Arguments to create many CartItems.
     * @example
     * // Create many CartItems
     * const cartItems = await prisma.cartItems.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends cartItemsCreateManyArgs>(args?: Prisma.SelectSubset<T, cartItemsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Delete a CartItems.
     * @param {cartItemsDeleteArgs} args - Arguments to delete one CartItems.
     * @example
     * // Delete one CartItems
     * const CartItems = await prisma.cartItems.delete({
     *   where: {
     *     // ... filter to delete one CartItems
     *   }
     * })
     *
     */
    delete<T extends cartItemsDeleteArgs>(args: Prisma.SelectSubset<T, cartItemsDeleteArgs<ExtArgs>>): Prisma.Prisma__cartItemsClient<runtime.Types.Result.GetResult<Prisma.$cartItemsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one CartItems.
     * @param {cartItemsUpdateArgs} args - Arguments to update one CartItems.
     * @example
     * // Update one CartItems
     * const cartItems = await prisma.cartItems.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends cartItemsUpdateArgs>(args: Prisma.SelectSubset<T, cartItemsUpdateArgs<ExtArgs>>): Prisma.Prisma__cartItemsClient<runtime.Types.Result.GetResult<Prisma.$cartItemsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more CartItems.
     * @param {cartItemsDeleteManyArgs} args - Arguments to filter CartItems to delete.
     * @example
     * // Delete a few CartItems
     * const { count } = await prisma.cartItems.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends cartItemsDeleteManyArgs>(args?: Prisma.SelectSubset<T, cartItemsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more CartItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cartItemsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CartItems
     * const cartItems = await prisma.cartItems.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends cartItemsUpdateManyArgs>(args: Prisma.SelectSubset<T, cartItemsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create or update one CartItems.
     * @param {cartItemsUpsertArgs} args - Arguments to update or create a CartItems.
     * @example
     * // Update or create a CartItems
     * const cartItems = await prisma.cartItems.upsert({
     *   create: {
     *     // ... data to create a CartItems
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CartItems we want to update
     *   }
     * })
     */
    upsert<T extends cartItemsUpsertArgs>(args: Prisma.SelectSubset<T, cartItemsUpsertArgs<ExtArgs>>): Prisma.Prisma__cartItemsClient<runtime.Types.Result.GetResult<Prisma.$cartItemsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of CartItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cartItemsCountArgs} args - Arguments to filter CartItems to count.
     * @example
     * // Count the number of CartItems
     * const count = await prisma.cartItems.count({
     *   where: {
     *     // ... the filter for the CartItems we want to count
     *   }
     * })
    **/
    count<T extends cartItemsCountArgs>(args?: Prisma.Subset<T, cartItemsCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], CartItemsCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a CartItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartItemsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CartItemsAggregateArgs>(args: Prisma.Subset<T, CartItemsAggregateArgs>): Prisma.PrismaPromise<GetCartItemsAggregateType<T>>;
    /**
     * Group by CartItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cartItemsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
    **/
    groupBy<T extends cartItemsGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: cartItemsGroupByArgs['orderBy'];
    } : {
        orderBy?: cartItemsGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, cartItemsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCartItemsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the cartItems model
     */
    readonly fields: cartItemsFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for cartItems.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__cartItemsClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    product<T extends Prisma.ProductsDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ProductsDefaultArgs<ExtArgs>>): Prisma.Prisma__ProductsClient<runtime.Types.Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
/**
 * Fields of the cartItems model
 */
export interface cartItemsFieldRefs {
    readonly id: Prisma.FieldRef<"cartItems", 'Int'>;
    readonly userId: Prisma.FieldRef<"cartItems", 'Int'>;
    readonly productId: Prisma.FieldRef<"cartItems", 'Int'>;
    readonly quantity: Prisma.FieldRef<"cartItems", 'Int'>;
}
/**
 * cartItems findUnique
 */
export type cartItemsFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cartItems
     */
    select?: Prisma.cartItemsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the cartItems
     */
    omit?: Prisma.cartItemsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.cartItemsInclude<ExtArgs> | null;
    /**
     * Filter, which cartItems to fetch.
     */
    where: Prisma.cartItemsWhereUniqueInput;
};
/**
 * cartItems findUniqueOrThrow
 */
export type cartItemsFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cartItems
     */
    select?: Prisma.cartItemsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the cartItems
     */
    omit?: Prisma.cartItemsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.cartItemsInclude<ExtArgs> | null;
    /**
     * Filter, which cartItems to fetch.
     */
    where: Prisma.cartItemsWhereUniqueInput;
};
/**
 * cartItems findFirst
 */
export type cartItemsFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cartItems
     */
    select?: Prisma.cartItemsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the cartItems
     */
    omit?: Prisma.cartItemsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.cartItemsInclude<ExtArgs> | null;
    /**
     * Filter, which cartItems to fetch.
     */
    where?: Prisma.cartItemsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of cartItems to fetch.
     */
    orderBy?: Prisma.cartItemsOrderByWithRelationInput | Prisma.cartItemsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for cartItems.
     */
    cursor?: Prisma.cartItemsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` cartItems from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` cartItems.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of cartItems.
     */
    distinct?: Prisma.CartItemsScalarFieldEnum | Prisma.CartItemsScalarFieldEnum[];
};
/**
 * cartItems findFirstOrThrow
 */
export type cartItemsFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cartItems
     */
    select?: Prisma.cartItemsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the cartItems
     */
    omit?: Prisma.cartItemsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.cartItemsInclude<ExtArgs> | null;
    /**
     * Filter, which cartItems to fetch.
     */
    where?: Prisma.cartItemsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of cartItems to fetch.
     */
    orderBy?: Prisma.cartItemsOrderByWithRelationInput | Prisma.cartItemsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for cartItems.
     */
    cursor?: Prisma.cartItemsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` cartItems from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` cartItems.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of cartItems.
     */
    distinct?: Prisma.CartItemsScalarFieldEnum | Prisma.CartItemsScalarFieldEnum[];
};
/**
 * cartItems findMany
 */
export type cartItemsFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cartItems
     */
    select?: Prisma.cartItemsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the cartItems
     */
    omit?: Prisma.cartItemsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.cartItemsInclude<ExtArgs> | null;
    /**
     * Filter, which cartItems to fetch.
     */
    where?: Prisma.cartItemsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of cartItems to fetch.
     */
    orderBy?: Prisma.cartItemsOrderByWithRelationInput | Prisma.cartItemsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing cartItems.
     */
    cursor?: Prisma.cartItemsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` cartItems from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` cartItems.
     */
    skip?: number;
    distinct?: Prisma.CartItemsScalarFieldEnum | Prisma.CartItemsScalarFieldEnum[];
};
/**
 * cartItems create
 */
export type cartItemsCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cartItems
     */
    select?: Prisma.cartItemsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the cartItems
     */
    omit?: Prisma.cartItemsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.cartItemsInclude<ExtArgs> | null;
    /**
     * The data needed to create a cartItems.
     */
    data: Prisma.XOR<Prisma.cartItemsCreateInput, Prisma.cartItemsUncheckedCreateInput>;
};
/**
 * cartItems createMany
 */
export type cartItemsCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many cartItems.
     */
    data: Prisma.cartItemsCreateManyInput | Prisma.cartItemsCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * cartItems update
 */
export type cartItemsUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cartItems
     */
    select?: Prisma.cartItemsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the cartItems
     */
    omit?: Prisma.cartItemsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.cartItemsInclude<ExtArgs> | null;
    /**
     * The data needed to update a cartItems.
     */
    data: Prisma.XOR<Prisma.cartItemsUpdateInput, Prisma.cartItemsUncheckedUpdateInput>;
    /**
     * Choose, which cartItems to update.
     */
    where: Prisma.cartItemsWhereUniqueInput;
};
/**
 * cartItems updateMany
 */
export type cartItemsUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update cartItems.
     */
    data: Prisma.XOR<Prisma.cartItemsUpdateManyMutationInput, Prisma.cartItemsUncheckedUpdateManyInput>;
    /**
     * Filter which cartItems to update
     */
    where?: Prisma.cartItemsWhereInput;
    /**
     * Limit how many cartItems to update.
     */
    limit?: number;
};
/**
 * cartItems upsert
 */
export type cartItemsUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cartItems
     */
    select?: Prisma.cartItemsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the cartItems
     */
    omit?: Prisma.cartItemsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.cartItemsInclude<ExtArgs> | null;
    /**
     * The filter to search for the cartItems to update in case it exists.
     */
    where: Prisma.cartItemsWhereUniqueInput;
    /**
     * In case the cartItems found by the `where` argument doesn't exist, create a new cartItems with this data.
     */
    create: Prisma.XOR<Prisma.cartItemsCreateInput, Prisma.cartItemsUncheckedCreateInput>;
    /**
     * In case the cartItems was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.cartItemsUpdateInput, Prisma.cartItemsUncheckedUpdateInput>;
};
/**
 * cartItems delete
 */
export type cartItemsDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cartItems
     */
    select?: Prisma.cartItemsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the cartItems
     */
    omit?: Prisma.cartItemsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.cartItemsInclude<ExtArgs> | null;
    /**
     * Filter which cartItems to delete.
     */
    where: Prisma.cartItemsWhereUniqueInput;
};
/**
 * cartItems deleteMany
 */
export type cartItemsDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which cartItems to delete
     */
    where?: Prisma.cartItemsWhereInput;
    /**
     * Limit how many cartItems to delete.
     */
    limit?: number;
};
/**
 * cartItems without action
 */
export type cartItemsDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cartItems
     */
    select?: Prisma.cartItemsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the cartItems
     */
    omit?: Prisma.cartItemsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.cartItemsInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=cartItems.d.ts.map