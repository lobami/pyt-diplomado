import { Context } from "../../utils";

export default {
    createBillboard: (parent, args, ctx: Context) => ctx.prisma.createBillboard(args.data),
    updateBillboard: (parent, args, ctx: Context) => ctx.prisma.updateBillboard(args.data) 
}