'use server'
import { revalidatePath } from "next/cache"
import { postTasks } from "./tasks"
import { redirect } from "next/navigation"


export const CreateATask = async(formData) => {
    
    // const name = formData.get('name')
    console.log('form all data',formData)

    const newTask = Object.fromEntries(formData.entries())

    const res = await postTasks(newTask)
    if(res.ok){
        revalidatePath('/tasks')
    }
     return res;


}

export const NewTaskAction = async(formData) =>{
    

     const newTask = Object.fromEntries(formData.entries())

    const res = await postTasks(newTask)
    if(res.ok){
        revalidatePath('/tasks')
        redirect('/tasks')
    }
     return res;

}