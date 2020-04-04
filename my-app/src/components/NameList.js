import React from 'react'
import Person from './Person'
// function NameList() {
//     const names=['suru','nora','zaman']
//     const nameList = names.map(name => <h2>{name}</h2> )
//     return (
//         <div>  {nameList}
//             {/* {
//                   names.map(name => <h2>{name}</h2>)
//             } */}
//         </div>
//     )
// }

function NameList(){
    const persons =[
        {
            id:1,
            name:'Suru',
            age:3,
            skill:'React'
        },
        {
            id:2,
            name:'Nora',
            age:3,
            skill:'JS'
        },
        {
            id:3,
            name:'Sofia',
            age:3,
            skill:'Java'
        },
        {
            id:4,
            name:'Zaman',
            age:3,
            skill:'Laravel'
        }
    ]

const personList = persons.map(person=>(<Person person={person}></Person>) )
return <div>{personList}</div>
}

export default NameList
