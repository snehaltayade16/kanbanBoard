import { createContext } from "react";
export type Card = {title:string,id:number}
export type Col = {title:string,id:number,color:string,cards:Card[]}
type ContextType ={
    options : Col[],
    setOptions : (value: Col[]) => void,
    addCards : (cardId:number, title:string) => void,
    editDashBoardOption : (cardId:number, title:string) => void
    deleteCards: (cardId:number,dashBoardOptionId:number) => void
}
export const BoardOptionContext = createContext<ContextType | null>(null)