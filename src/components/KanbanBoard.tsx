import { useContext } from "react";
import { BoardOptionContext } from '../globalStore/BoardOptionContext'


function KanbanBoard(){
    const {options} = useContext(BoardOptionContext)!
    console.log(options)
    return(
        <>
            <div className="flex gap-2.5 h-full w-full">
               {
                options.map((item) => 
                    <div className="flex-1 pb-5 pt-5 pr-5">
                        <div className="flex items-center h-8 gap-2.5 flex">
                            <div className={`h-2.5 rounded-full aspect-square ${item.color}`}></div>
                            <p className="text-black">{item.title}</p>
                        </div>
                    </div>
                )
                 }
                
                {/* <div className="flex-1"></div>
                <div className="flex-1"></div> */}
            </div>
        </>
    )
}
export default KanbanBoard;