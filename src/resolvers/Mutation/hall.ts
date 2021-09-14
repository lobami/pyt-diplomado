import { Context } from "../../utils";

export default {
    createHall: (parent, args, ctx: Context) => ctx.prisma.createHall(args.data),
    updateHall: (parent, args, ctx: Context) => ctx.prisma.updateHall(args.data) 
}