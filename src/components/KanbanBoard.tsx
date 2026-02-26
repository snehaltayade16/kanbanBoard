import { useContext, useState } from "react";
import { BoardOptionContext } from '../globalStore/BoardOptionContext'
import TaskCards from './Taskcards'
import edit from '../assets/edit.png'

function KanbanBoard(){
    const {options, addCards, editDashBoardOption} = useContext(BoardOptionContext)!
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
            <div className="flex flex-col sm:flex-row gap-5 h-full w-full p-5">
               {
                    options.map((item) => 
                        <div key ={item.id} className="h-fit  sm:min-h-screen  flex flex-col flex-1 bg-slate-100 rounded-xl p-3">
                            <div className="flex items-center h-8 gap-2.5 justify-between">
                                <div className="flex items-center">
                                    <div className={`h-2.5 rounded-full aspect-square mr-1.5 ${item.color}`}></div>
                                    {
                                    
                                       editId == item.id ? <input placeholder="Enter title" className="mr-2.5 w-28 sm:w-28 bg-slate-100 rounded-md p-1.5 text-black border-[#c8c4c4]" autoFocus onBlur={(e) =>{ editDashBoardOption(item.id, e.target.value),setEditId(null) }}></input>:<p title={item.title} className="w-28 text-black mr-2.5 truncate hover:text-clip">{item.title}</p> 

                                    }
                                    <div className="h-6 aspect-square flex items-center justify-center bg-blue-700 rounded-full text-xs font-bold">{item.cards.length}</div>
                                </div>
                                <div className="flex items-center gap-1.5">
                                    <div className="text-xl text-slate-400 cursor-pointer" title="Add new task" onClick={() => setActiveCardID(item.id)}>+</div>
                                    <img src={edit} className="h-3.5 cursor-pointer" title="edit dashboard title" onClick={() => showEditInput(item.id)}/>
                                </div>
                            </div>
                            <div className="flex-1 w-full pt-2.5">
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
                                    item.cards.map(card => (<TaskCards key={card.id} CardData={card} DashBoardOptionId={item.id}/>)) : <p className="h-full w-full flex items-center justify-center text-slate-400 ">Create New Task</p>
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