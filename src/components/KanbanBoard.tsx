import { useContext, useState } from "react";
import { BoardOptionContext } from '../globalStore/BoardOptionContext'
import TaskCards from './Taskcards'
import add from '../assets/add.png'
import edit from '../assets/edit.png'

function KanbanBoard(){
    const {options, addCards} = useContext(BoardOptionContext)!
    const [activeCardID, setActiveCardID] = useState<number | null>(null)
    const [editId, setEditId] = useState<number | null>(null)
    const [inputText, setInputText] = useState<string | null>(null)
    // const [isEdit, setEdit] = useState(false)
    function addNewTask(colId:number) {
        if(!inputText){
            alert('Please enter Task Name')
            return;
        };
        addCards(colId, inputText)
        setActiveCardID(0)
        setInputText('')
    }
    function showEditInput(id:number){
        setEditId(id)
    }
    console.log(options)
    return(
        <>
            <div className="h-full w-full p-5 flex flex-col sm:flex-row gap-5 overflow-y-auto">
                {
                    options.map((item) => 
                        <div key ={item.id} className="h-fit sm:h-full flex flex-1 flex-col border border-[#C4D5E5] bg-slate-100 rounded-xl">
                            <div className="h-12 p-2 flex items-center justify-between gap-2.5 bg-white">
                                <div className="h-full flex items-center">
                                    <div className={`aspect-square w-1.5 rounded-full ml-1 mr-1.5 ${item.color}`}></div>
                                    {editId == item.id ? <input placeholder="Enter title" className="w-28 sm:w-28 mr-2.5 bg-slate-100 rounded-md p-1.5 text-slate-600 font-semibold border-[#c8c4c4]" autoFocus></input>:<p title={item.title} className="text-slate-600 font-semibold mr-2.5 truncate hover:text-clip">{item.title}</p>}
                                </div>
                                <div className="h-full flex items-center gap-1.5">
                                    <div className="h-full aspect-square p-2 pt-2.5 text-[#94A3B7] bg-white hover:bg-slate-100 border border-slate-300 transition-all duration-500 flex items-center justify-center rounded-full overflow-hidden cursor-pointer">
                                        {item.cards.length}
                                    </div>
                                    <div className="h-full aspect-square p-2 bg-white hover:bg-slate-100 border border-transparent hover:border-slate-300 transition-all duration-500 flex items-center justify-center rounded-full overflow-hidden cursor-pointer">
                                        <img src={add} className="h-full w-full" title="edit dashboard title" onClick={() => setActiveCardID(item.id)}/>
                                    </div>
                                    <div className="h-full aspect-square p-2 bg-white hover:bg-slate-100 border border-transparent hover:border-slate-300 transition-all duration-500 flex items-center justify-center rounded-full overflow-hidden cursor-pointer">
                                        <img src={edit} className="h-full w-full" title="edit dashboard title" onClick={() => showEditInput(item.id)}/>
                                    </div>
                                </div>
                            </div>
                            <div className="grow w-full flex-1 flex items-center relative">
                                <div className="w-full sm:absolute inset-0 px-2.5 pb-2.5 overflow-y-auto">
                                    {
                                        activeCardID == item.id &&
                                        (<div className="absolute top-2.5 inset-x-2.5 h-48 p-2.5 flex flex-col justify-between bg-white rounded-lg">
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
                                        item.cards.map(card => (<TaskCards key={card.id} CardData={card} DashBoardOptionId={item.id}/>)) : <p className="h-full w-full flex items-center justify-center text-slate-400 m-auto">Create New Task</p>
                                    }
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </>
    )
}
export default KanbanBoard;