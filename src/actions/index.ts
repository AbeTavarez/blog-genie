'use server'

export async function handleCompletion(formData: FormData) {
    const blogTopic = formData.get('user_prompt') as string;
    console.log(blogTopic);
}