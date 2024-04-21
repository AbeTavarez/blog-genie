'use server'
import OpenAI from "openai";
import clientPromise from "@/db/mongodb";
import { BlogPost } from "@/types";
import { revalidatePath } from "next/cache";

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});


/**
 * Handle Completion
 * @param formData 
 */
export async function handleCompletion(formData: FormData) {
    const blogTopic = formData.get('user_prompt') as string;
    console.log(blogTopic);

    // BD Client
    const client = await clientPromise;
    const db = client.db('bloggenie');

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
        const content = completion.choices[0].message.content;

        if (!content) {
            throw new Error("Error generating blog post");
        }
        
        // save the blog to the db
        const parsedContent = JSON.parse(content);

        const blog = await db.collection("blogs").insertOne({
            ...parsedContent,
            createdAt: new Date(),
        });

        revalidatePath('/blogs')
        console.log(blog);
        

    } catch (e) {
        console.log('ERROR WITH OPENAI', e);
        
    }
}


/**
 * Get Blogs
 */
export async function getBlogs() {
    const client = await clientPromise;
    const db =  client.db('bloggenie');
    // get all blog posts
    const blogs = await db.collection<BlogPost>('blogs').find().toArray();
    console.log(blogs);
    return blogs;
}