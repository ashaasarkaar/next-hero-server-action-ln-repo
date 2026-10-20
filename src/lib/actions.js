export const CreateATask = async(formData) => {
    'use server'
    const name = formData.get('name')
    console.log('form name',name)

}