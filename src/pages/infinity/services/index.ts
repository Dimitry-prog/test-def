import { axiosInfinityInstance } from '@/shared/lib/api.ts';
import { PostType } from '@/pages/infinity/types';

export const getPosts = async ({ pageParam }: { pageParam: number }) => {
  const todos = await axiosInfinityInstance<PostType[]>(`/posts?_page=${pageParam}&_limit=10`);

  return todos.data;
};
