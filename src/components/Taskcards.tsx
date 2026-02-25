
import { useContext,} from "react";
import { BoardOptionContext } from '../globalStore/BoardOptionContext'
import deleteIcon from '../assets/delete.png'

type Card ={
    id:number,
    title:String
}
type TaskCardProps ={
    CardData : Card
    DashBoardOptionId : number
}
function TaskCards({CardData, DashBoardOptionId}:TaskCardProps){
    const {deleteCards} = useContext(BoardOptionContext)!
   
    return(
        <div className="flex flex-col justify-between bg-white h-48 rounded-lg w-full p-2.5 mt-2.5">
            <div className="flex items-center justify-between">
                <p className="py-3 pb-5 text-base text-black">{CardData.title}</p>
                <img src={deleteIcon} className="h-5 cursor-pointer" onClick={() => deleteCards(CardData.id, DashBoardOptionId)}/>
            </div>
        </div>
    )
}
export default TaskCards;