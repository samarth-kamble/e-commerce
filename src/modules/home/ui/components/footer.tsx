import React from "react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="flex flex-col border-t font-medium p-6 bg-white">
      <div className="flex items-center justify-center">
        <p className="text-gray-500">
          &copy; {currentYear} Cavierra Pvt Ltd. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
