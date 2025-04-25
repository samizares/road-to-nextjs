//import { initialTickets } from "@/data";
//import { Ticket } from "@/features/types";

import { prisma } from "@/lib/prisma"

//export const getTickets = async (): Promise<Ticket[]> => {
//     await new Promise((resolve) => setTimeout(resolve, 2000));
//    // console.log(process.env.DATABASE_URL);
//     //throw new Error("Failed to fetch tickets");
//     return new Promise((resolve) => {
//         resolve(initialTickets);
//     });

export const getTickets = async() => {
    return await prisma.ticket.findMany({
        orderBy: {
            createdAt: "desc"
        }
    });
}

