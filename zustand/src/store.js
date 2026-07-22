
import { create } from 'zustand'
import { persist } from 'zustand/middleware';

// create(()=>{
//     return{ //return states
//         count:1,
//         name:'Varun'
//     }
// })


const useMystore = create(persist((set,get)=>({
    count:1,
    name:"Varun",
    increment:()=>{
        set((state)=>({
            count:state.count+1

        }))
    

    },
    capitalizeName:()=>{
        // console.log(get())
        const {name} =get()
        set({
            name: name.charAt(0).toLowerCase()+name.slice(1)
        })
    }
}))
)


export default useMystore;