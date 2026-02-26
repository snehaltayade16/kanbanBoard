import './App.css'
import Header from './components/Header'
import KanbanBoard from './components/KanbanBoard'
function App() {
    return (
        <>
            <section className='h-full w-full flex flex-col bg-[#F5F9FC]'>
                <Header />
                <main className='grow w-full relative'>
                    <div className="absolute inset-0 overflow-hidden">
                        <KanbanBoard />
                    </div>
                </main>
                <footer className='h-20 flex items-center justify-center text-slate-600 font-bold'>@Kanban Board</footer>
            </section>
        </>
    )
}

export default App
