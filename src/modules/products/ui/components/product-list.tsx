"use client";

import { useTRPC } from "@/trpc/client";
import { useSuspenseInfiniteQuery } from "@tanstack/react-query";
import { useProductFilters } from "../../hooks/use-product-filters";
import { ProductCard } from "./product-card";
import { DEFAULT_LIMIT } from "@/modules/tags/constants";
import { Button } from "@/components/ui/button";
import { InboxIcon } from "lucide-react";

interface Props {
  category?: string;
}

export const ProductList = ({ category }: Props) => {
  const [filters] = useProductFilters();

  const trpc = useTRPC();
  const { data, hasNextPage, isFetchingNextPage, fetchNextPage } =
    useSuspenseInfiniteQuery(
      trpc.products.getMany.infiniteQueryOptions(
        {
          ...filters,
          category,
          limit: DEFAULT_LIMIT,
        },
        {
          getNextPageParam: (lastPage) => {
            return lastPage.docs.length > 0 ? lastPage.nextPage : undefined;
          },
        }
      )
    );
  if (data.pages?.[0]?.docs.length === 0) {
    return (
      <div className="relative overflow-hidden bg-gradient-to-br from-slate-50 to-gray-100 border border-gray-200/60 rounded-xl p-12 flex items-center justify-center flex-col gap-y-6 w-full shadow-sm hover:shadow-md transition-all duration-300">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-100/50 to-purple-100/50 rounded-full blur-2xl opacity-60"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-pink-100/50 to-orange-100/50 rounded-full blur-xl opacity-40"></div>

        {/* Icon container with enhanced styling */}
        <div className="relative bg-white rounded-full p-4 shadow-lg shadow-gray-200/50 border border-gray-100">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-full p-3">
            <InboxIcon className="w-8 h-8 text-gray-400" />
          </div>
        </div>

        {/* Content */}
        <div className="text-center space-y-2 relative z-10">
          <h3 className="text-xl font-semibold text-gray-800">
            No Products Found
          </h3>
          <p className="text-gray-500 text-sm max-w-md leading-relaxed">
            We couldn&apos;t find any products matching your criteria. Try
            adjusting your filters or check back later.
          </p>
        </div>

        {/* Optional action button */}
        <Button
          variant="elevated"
          onClick={() => {
            window.location.reload();
          }}
        >
          Refresh Products
        </Button>
      </div>
    );
  }
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4">
        {data?.pages
          .flatMap((page) => page.docs)
          .map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              imageUrl={product.image?.url}
              authorUsername="samarth"
              reviewRating={4.5}
              reviewCount={10}
              price={product.price}
            />
          ))}
      </div>
      <div className="flex justify-center pt-8">
        {hasNextPage && (
          <Button
            disabled={isFetchingNextPage}
            onClick={() => fetchNextPage()}
            className="font-medium disabled:opacity-50 text-base bg-white"
            variant="elevated"
          >
            Load more
          </Button>
        )}
      </div>
    </>
  );
};
