'use server'
import OpenAI from "openai";

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});

export async function handleCompletion(formData: FormData) {
    const blogTopic = formData.get('user_prompt') as string;
    console.log(blogTopic);

    // const prompt = `write a short and simple blog post about ${blogTopic}`;
    // const prompt = `write a long and detailed blog post about ${blogTopic}`;
    //  const prompt = `write a blog post in ${n} of words or fewer about ${blogTopic}`;
// const prompt = `write a long and detailed SEO-friendly blog post about ${blogTopic}`;

const prompt = `write a long and detailed SEO-friendly blog post about ${blogTopic} targeting relevant keywords. The content should be formatted in SEO-friendly HTML including a HTML title tag and meta description
The output format must a JSON object with the following format:
{
    "title" title here,
    "content": blog post here,
    "metaInfo": meta description here,
    "keywords": relevant keywords here
}
`

    try {
        const completion = await openai.chat.completions.create({
            messages: [
                {role: "system", content: 'You are a professional blog post writer'},
                {role: 'user', content: prompt}
            ],
            model: 'gpt-3.5-turbo',
            temperature: 0,
            max_tokens: 1000
        });

        console.log(completion.choices[0].message.content);
        

    } catch (e) {
        console.log('ERROR WITH OPENAI', e);
        
    }
}