"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer"
import { ThemeToggle } from "@/components/theme-toggle"

export function MobileMenu() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Solutions", href: "#solutions" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <div className="md:hidden">
      <Drawer open={open} onOpenChange={setOpen}>
        <DrawerTrigger asChild>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-6 w-6" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </DrawerTrigger>
        <DrawerContent className="h-[75vh]">
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between p-4 border-b">
              <span className="text-2xl font-title font-bold">hamath</span>
              <Button variant="ghost" size="icon" onClick={() => setOpen(false)}>
                <X className="h-6 w-6" />
                <span className="sr-only">Close menu</span>
              </Button>
            </div>
            <div className="flex flex-col gap-4 p-4 flex-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-lg py-3 px-4 rounded-lg hover:bg-muted transition-colors"
                  onClick={() => setOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <div className="p-4 border-t flex items-center justify-between">
              <ThemeToggle />
              <Button>Get Started</Button>
            </div>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  )
}