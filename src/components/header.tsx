import { homePath, ticketsPath } from "@/paths";
import { LucideSquareKanban } from "lucide-react";
import Link from "next/link";

import { ThemeSwitcher } from "./theme/theme-switcher";
import { Button, buttonVariants } from "./ui/button";

const Header =() =>{
    return(
      <nav 
           className="
           supports-backdrop-blur:bg-background/60
           fixed left-0 right-0 top-0 z-20
           border-b bg-background/95 backdrop-blur
           w-full flex py-2.5 px-5 justify-between
         "
        >
          <div className="flex align-items gap-x-2">
            <Button asChild variant="ghost">
              <Link href={homePath()}>
                <LucideSquareKanban />
                <h1 className="ml-2 text-lg font-semibold">TicketBounty</h1></Link>
            </Button>
          </div>

          <div className="flex align-items gap-x-2"> 
              <ThemeSwitcher />           
              <Link 
              href={ticketsPath()} 
              className={buttonVariants({variant:"default"})}>Tickets</Link>
          </div>
</nav>
    )
};
export {Header};