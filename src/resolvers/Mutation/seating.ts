import { Context } from "../../utils";

export default {
    createSeating: (parent, args, ctx: Context) => ctx.prisma.createSeating(args.data),
    updateSeating: (parent, args, ctx: Context) => ctx.prisma.updateSeating(args.data) 
}