//import { initialTickets } from "@/data";
//import { Ticket } from "@/features/types";

import { prisma } from "@/lib/prisma"

//export const getTicket = async(ticketId: string): Promise<Ticket | null> => {
export const getTicket = async (id: string)=> {
   // await new Promise((resolve) => setTimeout(resolve, 2000));
   // const maybeTicket = initialTickets.find((ticket) => ticket.id === ticketId);
    // return new Promise((resolve) => {
    //     resolve(maybeTicket || null);
    // })
    return await prisma.ticket.findUnique({
        where: {
            id,
        }
    })

}