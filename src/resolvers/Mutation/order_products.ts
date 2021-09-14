import { Context } from "../../utils";

export default {
    createOrderProduct: (parent, args, ctx: Context) => ctx.prisma.createOrderProduct(args.data),
    updateOrderProduct: (parent, args, ctx: Context) => ctx.prisma.updateOrderProduct(args.data) 
}