import { createContext } from "react";
type col = {title:string,id:number,color:string}
type ContextType ={
    options : col[],
    setOptions : (value: col[]) => void
}
export const BoardOptionContext = createContext<ContextType | null>(null)