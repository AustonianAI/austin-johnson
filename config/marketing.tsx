import { MarketingConfig } from "@/types"

export type NavItem = {
  title: string
  href: string
  disabled?: boolean
}

export type MainNavItem = NavItem

export const marketingConfig: MarketingConfig = {
  mainNav: [
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Chat",
      href: "/chat",
    },
    {
      title: "Projects",
      href: "/projects",
    },
  ],
}
