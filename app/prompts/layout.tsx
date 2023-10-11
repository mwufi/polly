import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

export default function Layout({ children }) {
  const prompts = [
    // Previous prompts...

    {
      slug: "mystery-book-recommendation",
      short_prompt: "Mystery Book Recommendation",
      full_prompt: "Recommend a mystery book for someone who loves plot twists, historical settings, and well-developed characters."
    },
    {
      slug: "vegan-dessert-recipe",
      short_prompt: "Vegan Dessert Recipe",
      full_prompt: "Share a simple vegan dessert recipe that requires minimal ingredients and can be prepared without the use of an oven."
    },
    {
      slug: "home-gym-setup",
      short_prompt: "Home Gym Setup",
      full_prompt: "Advise on setting up a home gym focusing on cardio and basic strength training, considering limited space and a moderate budget."
    },
    {
      slug: "stress-management-tips",
      short_prompt: "Stress Management Tips",
      full_prompt: "Offer tips and strategies for managing stress and anxiety during high-pressure situations, such as work deadlines or exams."
    },
    {
      slug: "coding-project-idea",
      short_prompt: "Coding Project Idea",
      full_prompt: "Propose an idea for a beginner-friendly coding project that involves utilizing an API to fetch and display data, using JavaScript and HTML."
    }
  ]

  return (
    <div className="hidden h-full flex-col md:flex">
      {/* Navbar */}
      <div className="container flex flex-col items-start justify-between space-y-2 py-4 sm:flex-row sm:items-center sm:space-y-0 md:h-16">
        <h2 className="text-lg font-semibold">Playground</h2>
        <div className="ml-auto flex w-full space-x-2 sm:justify-end">
          <Button variant="secondary">Save</Button>
          <Button variant="secondary">View Code</Button>
          <Button variant="secondary">Share</Button>
        </div>
      </div>
      <Separator />

      {/* Main content */}
      <div className="container grid grid-cols-[400px_1fr] mt-4">
        <ul>
          <ScrollArea className="h-full w-[350px] rounded-md border p-4">
            <div className="mb-4">
              <Button>New Chat</Button>
            </div>

            {prompts.map((prompt) => (
              <li key={prompt.slug} className="my-2">
                <Link href={`/prompts/${prompt.slug}`} className="hover:text-pink-600 hover:bg-gray-100 p-2" passHref>
                  {prompt.short_prompt}
                </Link>
              </li>
            ))}
          </ScrollArea>
        </ul>
        {children}
      </div>
    </div>
  )
}