function Header(){
    return(
        <header className="flex items-center justify-between h-20 border-b border-zinc-300">
            <p className="text-2xl text-black font-bold">Kanban Board </p>
            <button className="bg-[#9333ea]">Create Task</button>
        </header>
    )
}
export default Header