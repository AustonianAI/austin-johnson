import Link from "next/link"

import { cn } from "@/lib/utils"

export default async function IndexPage() {
  return (
    <>
      <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
        <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
          <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
            Austin Johnson
          </h1>
          <p className="text-muted-foreground max-w-[42rem] leading-normal sm:text-xl sm:leading-8">
            I am a software engineer in Austin, Texas.
          </p>
          <div className="space-x-4"></div>
        </div>
      </section>
    </>
  )
}
