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

        function editDashBoardOption(cardId:number, title:string){
            if(title == ''){
                alert('Please Enter Dashbord Title')
                return;
            }
            setOptions(prev => 
                prev.map((items) => {
                    if(items.id == cardId)
                    {
                        return {...items, title : title}
                    }
                    return items
                })
            )
            // console.log('edit dashboard',cardId, title)
        }

        function deleteCards(cardId:number, dashBoardOptionId:number){
           setOptions(prev => {
            return prev.map((item) => {
                if(item.id == dashBoardOptionId){
                    return {...item, cards : item.cards.filter((cards) => cards.id !== cardId) }
                }
                return item
            })
           })
            // setOptions(prev => prev.map((item) => if(item.id == dashBoardOptionId) )))
        }

   return(
    <BoardOptionContext.Provider value = {{options, setOptions, addCards, editDashBoardOption, deleteCards}}>
        {children}
    </BoardOptionContext.Provider>
   )
}
export default BoardColumnsProvider;