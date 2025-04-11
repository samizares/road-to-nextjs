import Link from "next/link";
import { initialTickets } from "@/data";
import { ticketsPath } from "@/paths";

// src/app/tickets/[ticketId]/page.tsx
type TicketPageProps = {
    params: Promise<{
      ticketId: string;
    }>;
  };
  
  const TicketPage = async ({ params }: TicketPageProps) => {
    const { ticketId } = await params;
    const ticket = initialTickets.find((ticket) => ticket.id === ticketId);
  
      if(!ticket){
        return <div>Ticket not found</div>
      }
  
    return (
      <div>
        <Link href="/" className="underline">
               Back to Home
        </Link><br/>
        <Link href={ticketsPath()} className="underline">
               Back to Tickets
        </Link>
        
        <h2 className="text-lg">{ticket.title}</h2>
        <p className="text-sm">{ticket.content}</p>
      </div>
  
    );
  };
  
  export default TicketPage;