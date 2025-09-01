import { getPayload } from "payload";
import configPromise from "@payload-config";

import { SearchFilters } from "@/modules/home/ui/components/search-filters";
import { Navbar } from "@/modules/home/ui/components/navbar";
import { Footer } from "@/modules/home/ui/components/footer";

interface Props {
  children: React.ReactNode;
}

const Layout = async ({ children }: Props) => {
  const payload = await getPayload({
    config: configPromise,
  });

  const data = await payload.find({
    collection: "categories",
    depth: 2,
    pagination: false,
    where: {
      parent: {
        exists: false, // Get top-level categories (those without parents)
      },
    },
  });

  const formattedData = data.docs.map((doc) => ({
    ...doc,
    subcategories: doc.subcategories?.docs ?? [],
  }));

  console.log({ data, formattedData });

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <SearchFilters data={formattedData} />
      <div className="flex-1 bg-[#F4F4F0]">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
