import { useContext, useRef, useState } from "react";
import { BoardOptionContext } from '../globalStore/BoardOptionContext'
import deleteIcon from '../assets/delete.png'

function KanbanBoard(){
    const {options, addCards} = useContext(BoardOptionContext)!
    const [activeCardID, setActiveCardID] = useState<number | null>(null)
    const [inputText, setInputText] = useState<string | null>(null)
    function addNewTask(colId:number) {
        if(!inputText) return;
        addCards(colId, inputText)
        setActiveCardID(0)
        setInputText('')
    }
    console.log(options)
    return(
        <>
            <div className="flex gap-5 h-full w-full pt-5">
               {
                    options.map((item) => 
                        <div className="flex flex-col flex-1 bg-slate-100 rounded-xl p-3">
                            <div className="flex items-center h-8 gap-2.5 justify-between">
                                <div className="flex items-center">
                                    <div className={`h-2.5 rounded-full aspect-square mr-1.5 ${item.color}`}></div>
                                    <p className="text-black mr-2.5">{item.title}</p>
                                    <div className="h-6 aspect-square flex items-center justify-center bg-sky-200 rounded-full text-xs font-bold">{item.cards.length}</div>
                                </div>
                                <div className="text-xl text-slate-400 cursor-pointer" onClick={() => setActiveCardID(item.id)}>+</div>
                            </div>
                            <div className="h-full w-full pt-2.5">
                                {
                                    activeCardID == item.id &&
                                    (<div className=" flex flex-col justify-between bg-white h-48 rounded-lg w-full p-2.5">
                                        <div>
                                            <p className="py-3 pb-5 text-base text-black">Add Task</p>
                                            <input placeholder="Enter Task Name" className="w-full rounded-lg bg-slate-100 text-black p-2.5" onChange={(e) => setInputText(e.target.value)}></input>
                                        </div>
                                        <div className="ml-auto">
                                            <button onClick={() => addNewTask(item.id)}>Add</button>
                                        </div>
                                    </div>)
                                }

                                {
                                    item.cards.length > 0 ? 
                                    item.cards.map(item => 
                                    <div className="flex flex-col justify-between bg-white h-48 rounded-lg w-full p-2.5">
                                        <div className="flex items-center justify-between">
                                            <p className="py-3 pb-5 text-base text-black">{item.title}</p>
                                            <img src={deleteIcon} className="h-5 cursor-pointer"/>
                                        </div>
                                    </div>): <div>No Data Found</div>
                                }
                            </div>
                        </div>
                    )
                }
            </div>
        </>
    )
}
export default KanbanBoard;