import './App.css'
import Header from './components/Header'
import KanbanBoard from './components/KanbanBoard'
function App() {
  return (
    <>
     <section className='flex flex-col px-5 h-full w-full bg-[#f5f9fc]'>
        <Header/>
        <main className='h-full w-full'>
          <KanbanBoard/>
        </main>
        <footer className='h-20'></footer>
     </section>
    </>
  )
}

export default App
