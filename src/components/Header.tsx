import React from "react";

export const Header: React.FC<{}> = () => {
  return (
    <header className="border-b dark:border-gray-700 dark:bg-gray-950">
      <div className="container mx-auto px-4">
        <nav className="flex justify-between items-center py-4">
          <div className="font-bold text-xl dark:text-white">Yuki Maeda</div>
          <ul className="flex space-x-4">
            <li>
              <a href="/" className="hover:underline dark:text-gray-300">
                Home
              </a>
            </li>
            {/* <li>
              <a href="" className="hover:underline dark:text-gray-300">
                CV
              </a>
            </li>
            <li>
              <a href="" className="hover:underline dark:text-gray-300">
                Blog
              </a>
            </li>
            <li>
              <a href="" className="hover:underline dark:text-gray-300">
                Projects
              </a>
            </li> */}
          </ul>
        </nav>
      </div>
    </header>
  );
};
