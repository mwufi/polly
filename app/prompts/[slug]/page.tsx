import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

import { Metadata } from "next";
import { Textarea } from "@/components/ui/textarea";

export const metadata: Metadata = {
  title: 'Detail page',
}


interface PromptPageProps {
  params: {
    slug: string[]
  }
}

// retrieve stuff given params?
// so... we can store a UUID to navigate to in the slug, and then retrieve the relevant data using
// KV or something
function fetchChat(slug: string) {
  return {
    chatHistory: [],
    fullPrompt: "",
    slug
  }
}

export default function Page({ params }: PromptPageProps) {

  return (
    <div className="container">
      <div className="text-lg">
        {params.slug}
      </div>
      <Textarea placeholder="Here is the output"></Textarea>
    </div>
  )
}