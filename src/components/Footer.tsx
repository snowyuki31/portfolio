import React from "react";

export const Footer: React.FC<{}> = () => {
  return (
    <footer className="border-t dark:border-gray-700 py-4 dark:bg-gray-950">
      <div className="container mx-auto text-center dark:text-gray-300">
        <p>&copy; 2024 Yuki Maeda. All rights reserved.</p>
      </div>
    </footer>
  );
};
