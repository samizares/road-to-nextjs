export type TicketStatus = "OPEN" | "DONE" | "IN_PROGRESS";

export type Ticket = {
    id: string;
    title: string;
    content: string;
    status: TicketStatus;
}

//This file will be obsolete when we import our Ticket model from prisma client.Historical purposes
