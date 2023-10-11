'use client'

import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

interface SidebarNavProps extends React.HTMLAttributes<HTMLElement> {
  items: {
    href: string,
    title: string
  }[]
}
export default function SidebarNav({ className, items, ...props }: SidebarNavProps) {
  const pathname = usePathname()

  return (
    <nav className="flex space-x-2 lg:flex-col lg:space-x-0 lg:space-y-1">
      {items.map(item => (
        <Link className={
          cn(
            buttonVariants({ variant: 'ghost' }),
            pathname === item.href ? "bg-muted" : "hover:bg-transparent hover:underline", "justify-start")
        } href={item.href}>{item.title}</Link>
      ))}
    </nav>
  )

}