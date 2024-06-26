import { ObjectId } from "mongodb";


/**
 * Blog Post
 */
export interface Blog {
    _id: ObjectId;
    title: string;
    content: string;
    metaInfo: string;
    keywords: string;
    createdAt: Date;
}