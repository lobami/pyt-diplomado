import { Context } from "../../utils";

export default {
    createFunction: (parent, args, ctx: Context) => ctx.prisma.createFunction(args.data),
    updateFunction: (parent, args, ctx: Context) => ctx.prisma.updateFunction(args.data) 
}