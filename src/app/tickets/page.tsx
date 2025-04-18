import { initialTickets } from "@/data";
import { ticketPath } from "@/paths";
import clsx from "clsx";
import Link from "next/link";
import {
    Card,
    CardHeader,
    CardFooter,
    CardTitle,
    CardAction,
    CardDescription,
    CardContent,
  } from "@/components/ui/card";
  import { Separator } from "@/components/ui/separator"
import { Heading } from "@/components/heading";
import { TicketItem } from "@/features/ticket/ticket-item";




const TicketsPage = () => {
    return (
        <div className="flex-1 flex flex-col gap-y-8">
          <Heading title="Tickets" description="All your tickets at one place"/>
          <div className="flex-1 flex flex-col items-center gap-y-4 animate-fade-from-top">
            {initialTickets.map((ticket) => (
                <TicketItem key={ticket.id} ticket={ticket}/>
            ))}
            </div>      
        </div>
    )}

  export default TicketsPage;