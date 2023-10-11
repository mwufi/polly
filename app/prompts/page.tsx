import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default function Page(){
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
        <Separator/>

        {/* Main content */}
        <div>hi there</div>
    </div>
  )
}