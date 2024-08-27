export interface author {
  _id: string;
  name: string;
  email: string;
  image: string;
  role: string;
}

export interface data {
  _id: string;
  image: string;
  title: string;
  description: string;
  author: author;
  isPending: boolean;
  tags: string[];
  likes: number;
  relatedBlogs: any[];
  skills: string[];
  createdAt: string;
  updatedAt: string;
  __v: number;
}
export type BlogPostsResponse = data[];
