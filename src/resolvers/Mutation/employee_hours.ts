import { Context } from "../../utils";

export default {
    createEmployeeHours: (parent, args, ctx: Context) => ctx.prisma.createEmployeeHours(args.data),
    updateEmployeeHours: (parent, args, ctx: Context) => ctx.prisma.updateEmployeeHours(args.data) 
}