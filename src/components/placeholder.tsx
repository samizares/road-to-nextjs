import { LucideMessageSquareWarning } from "lucide-react";
import { cloneElement } from "react";

type PlaceholderTypes= {
    label: string;
    icon?: React.ReactElement<HTMLDivElement>;
    button?: React.ReactElement<HTMLDivElement>;
}
const Placeholder= ({label,
   icon=<LucideMessageSquareWarning />,
   button = <div />,
  }: PlaceholderTypes)=> {
  return(
    <div className="flex-1 self-center flex flex-col items-center justify-center gap-y-2">
        {cloneElement(icon,{
          className: "w-16 h-16",
        })}
        <h2 className="text-lg text-center">{label}</h2>
        {cloneElement(button,{
            className:"h-10",
  })}
    </div>
  );
}
export {Placeholder};