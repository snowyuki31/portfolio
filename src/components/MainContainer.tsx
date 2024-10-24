import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const MainContainer: React.FC<{}> = ({}) => {
  return (
    <div>
      <section className="bg-muted dark:bg-gray-800 py-20">
        <div className="container mx-auto text-center px-4">
          <h1 className="text-4xl font-bold mb-4 dark:text-white">
            Welcome to My Portfolio
          </h1>
          <p className="text-xl dark:text-gray-300">
            Web Developer | Blogger | Tech Enthusiast
          </p>
        </div>
      </section>

      <div className="container mx-auto mt-12 px-4">
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 dark:text-white">
            CV Highlights
          </h2>
          <Card className="dark:bg-gray-800">
            <CardContent className="pt-6">
              <ul className="list-disc list-inside dark:text-gray-300">
                <li>Key skill or experience 1</li>
                <li>Key skill or experience 2</li>
                <li>Key skill or experience 3</li>
              </ul>
            </CardContent>
          </Card>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 dark:text-white">
            Latest Blog Posts
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[1, 2].map((i) => (
              <Card key={i} className="dark:bg-gray-800">
                <CardHeader>
                  <CardTitle className="dark:text-white">
                    Blog Post Title {i}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground dark:text-gray-400">
                    Short excerpt of the blog post...
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 dark:text-white">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="dark:bg-gray-800">
                <CardContent className="pt-6">
                  <div className="bg-muted dark:bg-gray-700 h-32 mb-2 rounded"></div>
                  <h3 className="font-semibold dark:text-white">Project {i}</h3>
                  <p className="text-sm text-muted-foreground dark:text-gray-400">
                    Brief project description...
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 dark:text-white">
            Recent Achievements
          </h2>
          <Card className="dark:bg-gray-800">
            <CardContent className="pt-6">
              <ul className="list-disc list-inside dark:text-gray-300">
                <li>Achievement 1</li>
                <li>Achievement 2</li>
                <li>Achievement 3</li>
              </ul>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};
