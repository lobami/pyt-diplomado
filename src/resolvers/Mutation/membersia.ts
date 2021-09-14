import { Context } from "../../utils";

export default {
    createMembersia: (parent, args, ctx: Context) => ctx.prisma.createMembersia(args.data),
    updateMembersia: (parent, args, ctx: Context) => ctx.prisma.updateMembersia(args.data) 
}