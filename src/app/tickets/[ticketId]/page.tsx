import { Placeholder } from "@/components/placeholder";
import { Button } from "@/components/ui/button";
import { TicketItem } from "@/features/ticket/components/ticket-item";
import { getTicket } from "@/features/ticket/queries/getTicket";
import { ticketsPath } from "@/paths";
import Link from "next/link";



//import { notFound } from "next/navigation";

type TicketPageProps = {
    params: Promise<{
      ticketId: string;
    }>;
  };
  
  const TicketPage = async ({ params }: TicketPageProps) => {
    //const { ticketId } = await params;
    //const ticket = initialTickets.find((ticket) => ticket.id === ticketId);
    const ticket = await getTicket((await params).ticketId);
    
  
      if(!ticket){
       // notFound();
        return <Placeholder label="Ticket not found"  button={
          <Button asChild variant="outline">
           <Link href={ticketsPath()}>Go to Tickets</Link>
          </Button>
        } />
      }
  
    return (
      <div className="flex justify-center animate-fade-from-top">
        <TicketItem ticket={ticket} isDetail />
      </div>
  
    );
  };
  
  export default TicketPage;