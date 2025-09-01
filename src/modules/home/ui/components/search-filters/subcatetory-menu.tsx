import { Category } from "@/payload-types";
import Link from "next/link";

interface Props {
  category: any;
  isOpen: boolean;
  position: { top: number; left: number };
}

export const SubcategoryMenu = ({ category, isOpen, position }: Props) => {
  if (
    !isOpen ||
    !category.subcategories ||
    category.subcategories.length === 0
  ) {
    return null;
  }

  const backgroundColor = category.color || "#F5F5F5";
  return (
    <div
      className="absolute z-[100]"
      style={{
        top: "calc(100% + 8px)", // Position below the button with 8px gap
        left: "50%",
        transform: "translateX(-50%)", // Center horizontally
        minWidth: "200px",
      }}
    >
      {/* Invisible bridge to maintain hover */}
      <div className="h-2 w-60" />
      <div
        style={{ backgroundColor }}
        className="w-60 text-black rounded-md overflow-hidden border shadow-[4px_4px_0px_rgba(0,0,0,1)] -translate-x-[2px] -translate-y-[2px]"
      >
        <div className="py-1">
          {category.subcategories?.map((subcategory: Category) => (
            <Link
              key={subcategory.slug}
              href="/"
              className="w-full text-left p-4 hover:bg-black hover:text-white flex justify-between items-center font-medium"
            >
              {subcategory.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
