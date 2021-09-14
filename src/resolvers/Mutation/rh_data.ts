import { Context } from "../../utils";

export default {
    createRHData: (parent, args, ctx: Context) => ctx.prisma.createRHData(args.data),
    updateRHData: (parent, args, ctx: Context) => ctx.prisma.updateRHData(args.data) 
}