import { SearchInput } from "@/modules/home/ui/components/search-filters/search-input";

export const SearchFiltersSkeleton = () => {
  return (
    <div
      className="px-4 lg:px-12 py-8 border-b flex flex-col gap-4 w-full"
      style={{
        backgroundColor: "#F5F5F5",
      }}
    >
      <SearchInput disabled data={[]} />
      <div className="hidden lg:block">
        <div className="h-11" />
      </div>
    </div>
  );
};
