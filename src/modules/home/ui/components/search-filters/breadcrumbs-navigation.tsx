import Link from "next/link"; // 'Link' is defined but never used

import {
  Breadcrumb, // 'Breadcrumb' is defined but never used
  BreadcrumbItem, // 'BreadcrumbItem' is defined but never used
  BreadcrumbLink, // 'BreadcrumbLink' is defined but never used
  BreadcrumbList, // 'BreadcrumbList' is defined but never used
  BreadcrumbPage, // 'BreadcrumbPage' is defined but never used
  BreadcrumbSeparator, // 'BreadcrumbSeparator' is defined but never used
} from "@/components/ui/breadcrumb";

interface Props {
  activeCategoryName?: string | null;
  activeCategory?: string | null;
  activeSubcategoryName?: string | null;
}

export const BreadcrumbNavigation = ({
  activeCategoryName,
  activeCategory,
  activeSubcategoryName,
}: Props) => {
  if (!activeCategoryName || activeCategory === "all") return null;

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {activeSubcategoryName ? (
          <>
            <BreadcrumbItem>
              <BreadcrumbLink
                asChild
                className="text-xl font-medium underline text-primary"
              >
                <Link href={`/${activeCategory}`}>{activeCategoryName}</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="text-primary font-medium text-lg">
              /
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbPage className="text-xl font-medium">
                {activeSubcategoryName}
              </BreadcrumbPage>
            </BreadcrumbItem>
          </>
        ) : (
          <BreadcrumbItem>
            <BreadcrumbPage className="text-xl font-medium">
              {activeCategoryName}
            </BreadcrumbPage>
          </BreadcrumbItem>
        )}
      </BreadcrumbList>
    </Breadcrumb>
  );
};
