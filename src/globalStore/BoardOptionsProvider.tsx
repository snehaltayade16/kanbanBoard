import { useState} from 'react'
import type  { ReactNode } from 'react'
import type {Col} from './BoardOptionContext'
import {BoardOptionContext} from './BoardOptionContext'

type Props = {
    children : ReactNode;
}
function BoardColumnsProvider( {children}:Props ){

    const [options, setOptions] = useState<Col[]>(
        [
            {
                title:'To do',
                id:1,
                color:'bg-indigo-600',
                cards:[] 

            },
            {
                title:'In Progress',
                id:2,
                color:'bg-pink-300',
                cards:[]
            },
            {
                title:'Done',
                id:3,
                color:'bg-orange-400',
                cards:[]
            }
        ])

        function addCards(cardId:number,title:string){
           setOptions(prev =>
                prev.map(item => {
                    if (item.id === cardId) {
                    return {
                        ...item,
                        cards: [...item.cards, {id:Date.now(),title:title}]
                    };
                    }
                    return item;
                })
            );
        }

   return(
    <BoardOptionContext.Provider value = {{options, setOptions, addCards}}>
        {children}
    </BoardOptionContext.Provider>
   )
}
export default BoardColumnsProvider;