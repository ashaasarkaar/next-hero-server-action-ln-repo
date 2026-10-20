import { revalidatePath } from "next/cache"
import { postTasks } from "./tasks"

export const CreateATask = async(formData) => {
    'use server'
    // const name = formData.get('name')
    console.log('form all data',formData)

    const newTask = Object.fromEntries(formData.entries())

    const res = await postTasks(newTask)
    if(res.ok){
        revalidatePath('/tasks')
    }
    return res;


}