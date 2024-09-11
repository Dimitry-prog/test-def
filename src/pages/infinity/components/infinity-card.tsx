import { PostType } from '@/pages/infinity/types';

type InfinityCardProps = {
  post: PostType;
};

const InfinityCard = ({ post }: InfinityCardProps) => {
  return (
    <li className="flex flex-col gap-4 rounded-md p-4 shadow-md">
      <h3 className="text-lg font-semibold">{post.title}</h3>
      <p className="text-base font-normal">{post.body}</p>
    </li>
  );
};

export default InfinityCard;
