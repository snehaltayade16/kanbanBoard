import { useState} from 'react'
import type  { ReactNode } from 'react'
import {BoardOptionContext} from './BoardOptionContext'

type Props = {
    children : ReactNode;
}
function BoardColumnsProvider( {children}:Props ){

    const [options, setOptions] = useState([{title:'To DO',id:1,color:'bg-indigo-600'},{title:'In Progress',id:2,color:'bg-zinc-300'},{title:'Done',id:3,color:'bg-orange-400'}])

   return(
    <BoardOptionContext.Provider value = {{options, setOptions}}>
        {children}
    </BoardOptionContext.Provider>
   )
}
export default BoardColumnsProvider;