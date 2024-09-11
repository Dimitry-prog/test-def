import { usePosts } from '@/pages/infinity/hooks/use-posts.ts';
import InfinityCard from '@/pages/infinity/components/infinity-card.tsx';
import { Fragment } from 'react';
import { Button } from '@/shared/components/ui/button.tsx';
import Loader from '@/shared/components/loader.tsx';

const InfinityPage = () => {
  const { data, isLoading, isError, error, fetchNextPage, hasNextPage, isFetchingNextPage } =
    usePosts();

  return (
    <section className="space-y-5">
      <h2 className="text-center text-2xl font-bold">Infinity</h2>

      {isLoading ? (
        <Loader />
      ) : isError ? (
        <h2 className="text-lg text-destructive">{error.message}</h2>
      ) : data ? (
        <div className="flex flex-col gap-4">
          <ul className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {data.pages.map((posts, index) => (
              <Fragment key={index}>
                {posts.map((post) => (
                  <InfinityCard key={post.id} post={post} />
                ))}
              </Fragment>
            ))}
          </ul>

          {hasNextPage && (
            <Button
              onClick={() => fetchNextPage()}
              disabled={!hasNextPage || isFetchingNextPage}
              className="self-center"
            >
              {isFetchingNextPage
                ? 'Loading more...'
                : hasNextPage
                  ? 'Load More'
                  : 'Nothing more to load'}
            </Button>
          )}
        </div>
      ) : null}
    </section>
  );
};

export default InfinityPage;
