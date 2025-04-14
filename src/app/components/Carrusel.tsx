"use client"

import { useEffect, useState, useRef } from "react"
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "./ui/carousel"
import {
  Database,
  Globe,
  FileJson,
  GithubIcon,
} from "lucide-react"
import Image from "next/image"
import { useTheme } from "./ThemeProvider"

export default function TechIconsCarousel() {
  const [api, setApi] = useState<CarouselApi>()
  const [isPaused, setIsPaused] = useState(false)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  const { theme } = useTheme() // Obtener el tema actual

  // Auto-scroll effect with pause on hover
  useEffect(() => {
    if (!api) return

    if (!isPaused) {
      intervalRef.current = setInterval(() => {
      api.scrollNext()
      }, 1500)
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
        intervalRef.current = null
      }
    }
  }, [api, isPaused])

  const technologies = [
    { 
      icon: <GithubIcon className="h-12 w-12 text-gray-700 dark:text-gray-300 z-10" strokeWidth={1.5} />, 
      name: "GitHub", 
      borderColor: "border-gray-500/50", 
      bgGradient: "bg-gradient-to-br from-gray-500/20 to-gray-300/10",
      pattern: "after:content-[''] after:absolute after:inset-0 after:bg-[radial-gradient(circle_at_30%_50%,theme(colors.gray.500/10)_1px,transparent_6px)] after:bg-[length:10px_10px]",
      textColor: "text-gray-700 dark:text-gray-300",
      shadowColor: "shadow-gray-500/20"
    },
    { 
      icon: <div className="relative h-12 w-12 z-10">
              <Image
                src="/icons/git.png"
                alt="Git Icon"
                width={48}
                height={48}
                className="text-orange-600"
              />
            </div>, 
      name: "Git", 
      borderColor: "border-orange-600/50", 
      bgGradient: "bg-gradient-to-br from-orange-600/20 to-orange-400/10",
      pattern: "after:content-[''] after:absolute after:inset-0 after:bg-[radial-gradient(circle_at_35%_65%,theme(colors.orange.600/15)_0,transparent_8px)] after:bg-[length:13px_13px]",
      textColor: "text-orange-600",
      shadowColor: "shadow-orange-600/20"
    },
    { 
      icon: <div className="relative h-12 w-12 z-10">
              <Image
                src="/icons/render.png"
                alt="Render Icon"
                width={48}
                height={48}
                className="text-pink-500"
              />
            </div>, 
      name: "Render", 
      borderColor: "border-pink-500/50", 
      bgGradient: "bg-gradient-to-br from-pink-500/20 to-pink-300/10",
      pattern: "after:content-[''] after:absolute after:inset-0 after:bg-[radial-gradient(circle_at_40%_60%,theme(colors.pink.500/10)_1px,transparent_6px)] after:bg-[length:12px_12px]",
      textColor: "text-pink-500",
      shadowColor: "shadow-pink-500/20"
    },
    { 
      icon: <div className="relative h-12 w-12 z-10">
              <Image
                src="/icons/railway.png"
                alt="Railway Icon"
                width={48}
                height={48}
                className="text-purple-600"
              />
            </div>, 
      name: "Railway", 
      borderColor: "border-purple-600/50", 
      bgGradient: "bg-gradient-to-br from-purple-600/20 to-purple-400/10",
      pattern: "after:content-[''] after:absolute after:inset-0 after:bg-[repeating-linear-gradient(45deg,theme(colors.purple.600/10),theme(colors.purple.600/10)_1px,transparent_1px,transparent_6px)]",
      textColor: "text-purple-600",
      shadowColor: "shadow-purple-600/20"
    },
    { 
      icon: <div className="relative h-12 w-12 z-10">
              <Image
                src="/icons/vercel.svg"
                alt="Vercel Icon"
                width={48}
                height={48}
              />
            </div>, 
      name: "Vercel", 
      borderColor: "border-gray-800/50 dark:border-gray-200/50", 
      bgGradient: "bg-gradient-to-br from-gray-800/20 to-gray-600/10 dark:from-gray-200/20 dark:to-gray-400/10",
      pattern: "after:content-[''] after:absolute after:inset-0 after:bg-[radial-gradient(circle_at_70%_20%,theme(colors.gray.800/15)_0,transparent_6px)] dark:after:bg-[radial-gradient(circle_at_70%_20%,theme(colors.gray.200/15)_0,transparent_6px)] after:bg-[length:15px_15px]",
      textColor: "text-gray-800 dark:text-gray-200",
      shadowColor: "shadow-gray-800/20 dark:shadow-gray-200/20"
    },
    { 
      icon: <div className="relative h-12 w-12 z-10">
              <Image
                src="/icons/js.png"
                alt="JavaScript Icon"
                width={48}
                height={48}
                className="text-yellow-500"
              />
            </div>, 
      name: "JavaScript", 
      borderColor: "border-yellow-500/50", 
      bgGradient: "bg-gradient-to-br from-yellow-500/20 to-yellow-300/10",
      pattern: "after:content-[''] after:absolute after:inset-0 after:bg-[radial-gradient(circle_at_30%_50%,theme(colors.yellow.500/10)_1px,transparent_6px)] after:bg-[length:10px_10px]",
      textColor: "text-yellow-500",
      shadowColor: "shadow-yellow-500/20"
    },
    { 
      icon: <Globe className="h-12 w-12 text-orange-500 z-10" strokeWidth={1.5} />, 
      name: "HTML/CSS", 
      borderColor: "border-orange-500/50", 
      bgGradient: "bg-gradient-to-br from-orange-500/20 to-orange-300/10",
      pattern: "after:content-[''] after:absolute after:inset-0 after:bg-[repeating-linear-gradient(90deg,theme(colors.orange.500/10),theme(colors.orange.500/10)_1px,transparent_1px,transparent_6px)]",
      textColor: "text-orange-500",
      shadowColor: "shadow-orange-500/20"
    },
    { 
      icon: <div className="relative h-12 w-12 z-10">
              <Image
                src="/icons/ts.png"
                alt="TypeScript Icon"
                width={48}
                height={48}
                className="text-blue-500"
              />
            </div>, 
      name: "TypeScript", 
      borderColor: "border-blue-500/50", 
      bgGradient: "bg-gradient-to-br from-blue-500/20 to-blue-300/10",
      pattern: "after:content-[''] after:absolute after:inset-0 after:bg-[radial-gradient(circle_at_60%_30%,theme(colors.blue.500/10)_1px,transparent_6px)] after:bg-[length:10px_10px]",
      textColor: "text-blue-500",
      shadowColor: "shadow-blue-500/20"
    },
    { 
      icon: <div className="relative h-12 w-12 z-10">
              <Image
                src="/icons/aws.svg"
                alt="AWS Icon"
                width={48}
                height={48}
                className="text-amber-500"
              />
            </div>, 
      name: "AWS", 
      borderColor: "border-amber-500/50", 
      bgGradient: "bg-gradient-to-br from-amber-500/20 to-amber-300/10",
      pattern: "after:content-[''] after:absolute after:inset-0 after:bg-[radial-gradient(circle_at_40%_60%,theme(colors.amber.500/10)_1px,transparent_6px)] after:bg-[length:12px_12px]",
      textColor: "text-amber-500",
      shadowColor: "shadow-amber-500/20"
    },
    { 
      icon: <FileJson className="h-12 w-12 text-green-400 z-10" strokeWidth={1.5} />, 
      name: "JSON", 
      borderColor: "border-green-400/50", 
      bgGradient: "bg-gradient-to-br from-green-400/20 to-green-200/10",
      pattern: "after:content-[''] after:absolute after:inset-0 after:bg-[repeating-linear-gradient(45deg,theme(colors.green.400/10),theme(colors.green.400/10)_1px,transparent_1px,transparent_6px)]",
      textColor: "text-green-400",
      shadowColor: "shadow-green-400/20"
    },
    { 
      icon: <div className="relative h-12 w-12 z-10">
              <Image
                src="/icons/nextjs.svg"
                alt="Next.js Icon"
                width={48}
                height={48}
              />
            </div>, 
      name: "Next.js", 
      borderColor: "border-gray-800/50 dark:border-gray-200/50", 
      bgGradient: "bg-gradient-to-br from-gray-800/20 to-gray-600/10 dark:from-gray-200/20 dark:to-gray-400/10",
      pattern: "after:content-[''] after:absolute after:inset-0 after:bg-[linear-gradient(135deg,theme(colors.gray.800/10)_25%,transparent_25%,transparent_50%,theme(colors.gray.800/10)_50%,theme(colors.gray.800/10)_75%,transparent_75%,transparent)] dark:after:bg-[linear-gradient(135deg,theme(colors.gray.200/10)_25%,transparent_25%,transparent_50%,theme(colors.gray.200/10)_50%,theme(colors.gray.200/10)_75%,transparent_75%,transparent)] after:bg-[length:8px_8px]",
      textColor: "text-gray-800 dark:text-gray-200",
      shadowColor: "shadow-gray-800/20 dark:shadow-gray-200/20"
    },
    { 
      icon: <div className="relative h-12 w-12 z-10">
              <Image
                src="/icons/graphql.png"
                alt="GraphQL Icon"
                width={48}
                height={48}
                className="text-pink-700"
              />
            </div>, 
      name: "GraphQL", 
      borderColor: "border-pink-700/50", 
      bgGradient: "bg-gradient-to-br from-pink-700/20 to-pink-500/10",
      pattern: "after:content-[''] after:absolute after:inset-0 after:bg-[radial-gradient(circle_at_10%_80%,theme(colors.pink.700/10)_1px,transparent_4px)] after:bg-[length:10px_10px]",
      textColor: "text-pink-700",
      shadowColor: "shadow-pink-700/20"
    },
    { 
      icon: <div className="relative h-12 w-12 z-10">
              <Image
                src="/icons/microservices.svg"
                alt="Microservices Icon"
                width={48}
                height={48}
                className="text-teal-500"
              />
            </div>, 
      name: "Microservices", 
      borderColor: "border-teal-500/50", 
      bgGradient: "bg-gradient-to-br from-teal-500/20 to-teal-300/10",
      pattern: "after:content-[''] after:absolute after:inset-0 after:bg-[repeating-linear-gradient(-45deg,theme(colors.teal.500/10),theme(colors.teal.500/10)_1px,transparent_1px,transparent_6px)]",
      textColor: "text-teal-500",
      shadowColor: "shadow-teal-500/20"
    },
    { 
      icon: <div className="relative h-12 w-12 z-10">
              <Image
                src="/icons/react-modern.svg"
                alt="React Icon"
                width={48}
                height={48}
                className="text-cyan-500"
              />
            </div>, 
      name: "React", 
      borderColor: "border-cyan-500/50", 
      bgGradient: "bg-gradient-to-br from-cyan-500/20 to-cyan-300/10",
      pattern: "after:content-[''] after:absolute after:inset-0 after:bg-[radial-gradient(circle_at_center,theme(colors.cyan.500/15)_0,transparent_8px)] after:bg-[length:16px_16px]",
      textColor: "text-cyan-500",
      shadowColor: "shadow-cyan-500/20"
    },
    { 
      icon: <div className="relative h-12 w-12 z-10">
              <Image
                src="/icons/nodejs.svg"
                alt="Node.js Icon"
                width={48}
                height={48}
                className="text-green-500"
              />
            </div>, 
      name: "Node.js", 
      borderColor: "border-green-500/50", 
      bgGradient: "bg-gradient-to-br from-green-500/20 to-green-300/10",
      pattern: "after:content-[''] after:absolute after:inset-0 after:bg-[linear-gradient(45deg,theme(colors.green.500/10)_25%,transparent_25%,transparent_50%,theme(colors.green.500/10)_50%,theme(colors.green.500/10)_75%,transparent_75%,transparent)] after:bg-[length:8px_8px]",
      textColor: "text-green-500",
      shadowColor: "shadow-green-500/20"
    },
    { 
      icon: <Database className="h-12 w-12 text-blue-600 z-10" strokeWidth={1.5} />, 
      name: "SQL", 
      borderColor: "border-blue-600/50", 
      bgGradient: "bg-gradient-to-br from-blue-600/20 to-blue-400/10",
      pattern: "after:content-[''] after:absolute after:inset-0 after:bg-[radial-gradient(circle_at_20%_40%,theme(colors.blue.600/15)_0,transparent_10px)] after:bg-[length:20px_20px]",
      textColor: "text-blue-600",
      shadowColor: "shadow-blue-600/20"
    },
    { 
      icon: <div className="relative h-12 w-12 z-10">
              <Image
                src="/icons/postgresql.png"
                alt="PostgreSQL Icon"
                width={48}
                height={48}
                className="text-blue-400"
              />
            </div>, 
      name: "PostgreSQL", 
      borderColor: "border-blue-400/50", 
      bgGradient: "bg-gradient-to-br from-blue-400/20 to-blue-200/10",
      pattern: "after:content-[''] after:absolute after:inset-0 after:bg-[radial-gradient(circle_at_30%_70%,theme(colors.blue.400/15)_0,transparent_8px)] after:bg-[length:15px_15px]",
      textColor: "text-blue-400",
      shadowColor: "shadow-blue-400/20"
    },
    { 
      icon: <div className="relative h-12 w-12 z-10">
              <Image
                src="/icons/mongodb.png"
                alt="MongoDB Icon"
                width={48}
                height={48}
                className="text-green-600"
              />
            </div>, 
      name: "MongoDB", 
      borderColor: "border-green-600/50", 
      bgGradient: "bg-gradient-to-br from-green-600/20 to-green-400/10",
      pattern: "after:content-[''] after:absolute after:inset-0 after:bg-[radial-gradient(circle_at_25%_75%,theme(colors.green.600/15)_0,transparent_8px)] after:bg-[length:14px_14px]",
      textColor: "text-green-600",
      shadowColor: "shadow-green-600/20"
    },
    { 
      icon: <div className="relative h-12 w-12 z-10">
              <Image
                src="/icons/nesticon.png"
                alt="Nest.js Icon"
                width={48}
                height={48}
                className="text-red-600"
              />
            </div>, 
      name: "Nest.js", 
      borderColor: "border-red-600/50", 
      bgGradient: "bg-gradient-to-br from-red-600/20 to-red-400/10",
      pattern: "after:content-[''] after:absolute after:inset-0 after:bg-[radial-gradient(circle_at_10%_80%,theme(colors.red.600/10)_1px,transparent_4px)] after:bg-[length:10px_10px]",
      textColor: "text-red-600",
      shadowColor: "shadow-red-600/20"
    },
    { 
      icon: <div className="relative h-12 w-12 z-10">
              <Image
                src="/icons/firebase.png"
                alt="Firebase Icon"
                width={48}
                height={48}
                className="text-orange-400"
              />
            </div>, 
      name: "Firebase", 
      borderColor: "border-orange-400/50", 
      bgGradient: "bg-gradient-to-br from-orange-400/20 to-yellow-300/10",
      pattern: "after:content-[''] after:absolute after:inset-0 after:bg-[radial-gradient(circle_at_40%_40%,theme(colors.orange.400/15)_0,transparent_8px)] after:bg-[length:12px_12px]",
      textColor: "text-orange-400",
      shadowColor: "shadow-orange-400/20"
    },
    { 
      icon: <div className="relative h-12 w-12 z-10">
              <Image
                src="/icons/ai.png"
                alt="AI Icon"
                width={48}
                height={48}
                className="text-violet-500"
              />
            </div>, 
      name: "AI", 
      borderColor: "border-violet-500/50", 
      bgGradient: "bg-gradient-to-br from-violet-500/20 to-violet-300/10",
      pattern: "after:content-[''] after:absolute after:inset-0 after:bg-[radial-gradient(circle_at_50%_50%,theme(colors.violet.500/15)_0,transparent_5px)] after:bg-[length:10px_10px]",
      textColor: "text-violet-500",
      shadowColor: "shadow-violet-500/20"
    },
    { 
      icon: <div className="relative h-12 w-12 z-10">
              <Image
                src="/icons/expo.png"
                alt="Expo Icon"
                width={48}
                height={48}
                className="text-black dark:invert"
              />
            </div>, 
      name: "Expo", 
      borderColor: "border-gray-800/50 dark:border-gray-200/50", 
      bgGradient: "bg-gradient-to-br from-gray-800/20 to-gray-600/10 dark:from-gray-200/20 dark:to-gray-400/10",
      pattern: "after:content-[''] after:absolute after:inset-0 after:bg-[radial-gradient(circle_at_30%_50%,theme(colors.gray.800/10)_1px,transparent_6px)] dark:after:bg-[radial-gradient(circle_at_30%_50%,theme(colors.gray.200/10)_1px,transparent_6px)] after:bg-[length:10px_10px]",
      textColor: "text-gray-800 dark:text-gray-200",
      shadowColor: "shadow-gray-800/20 dark:shadow-gray-200/20"
    },
    { 
      icon: <div className="relative h-12 w-12 z-10">
              <Image
                src="/icons/tailwind.png"
                alt="Tailwind CSS Icon"
                width={48}
                height={48}
                className="text-cyan-500"
              />
            </div>, 
      name: "Tailwind CSS", 
      borderColor: "border-cyan-500/50", 
      bgGradient: "bg-gradient-to-br from-cyan-500/20 to-cyan-300/10",
      pattern: "after:content-[''] after:absolute after:inset-0 after:bg-[radial-gradient(circle_at_45%_55%,theme(colors.cyan.500/15)_0,transparent_8px)] after:bg-[length:14px_14px]",
      textColor: "text-cyan-500",
      shadowColor: "shadow-cyan-500/20"
    },
    { 
      icon: <div className="relative h-12 w-12 z-10">
              <Image
                src="/icons/stripe.png"
                alt="Stripe Icon"
                width={48}
                height={48}
                className="text-violet-600"
              />
            </div>, 
      name: "Stripe", 
      borderColor: "border-violet-600/50", 
      bgGradient: "bg-gradient-to-br from-violet-600/20 to-violet-400/10",
      pattern: "after:content-[''] after:absolute after:inset-0 after:bg-[radial-gradient(circle_at_35%_65%,theme(colors.violet.600/15)_0,transparent_8px)] after:bg-[length:13px_13px]",
      textColor: "text-violet-600",
      shadowColor: "shadow-violet-600/20"
    },
  ]

  // Asegurarnos de que los colores del desvanecimiento coincidan con el tema actual
  const fadeColor = theme === 'dark' ? 'from-zinc-900' : 'from-zinc-50';

  return (
    <div 
      className="w-full max-w-5xl mx-auto py-8 px-2 sm:px-4 overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="relative">
        {/* Capa de desvanecimiento izquierda - Adaptada al tema actual */}
        <div className={`absolute top-0 bottom-0 left-0 z-10 w-16 bg-gradient-to-r ${fadeColor} to-transparent pointer-events-none`}></div>
        
        {/* Capa de desvanecimiento derecha - Adaptada al tema actual */}
        <div className={`absolute top-0 bottom-0 right-0 z-10 w-16 bg-gradient-to-l ${fadeColor} to-transparent pointer-events-none`}></div>
        
      <Carousel
        setApi={setApi}
        opts={{
          loop: true,
          align: "center",
          dragFree: true,
        }}
          className="w-full relative"
      >
        <CarouselContent>
          {technologies.map((tech, index) => (
            <CarouselItem 
              key={index} 
              className="basis-2/3 xs:basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/6 xl:basis-1/8 px-1 sm:px-2"
            >
                <div className="flex flex-col items-center justify-center p-2">
                  <div 
                    className={`relative overflow-hidden rounded-2xl ${tech.bgGradient} backdrop-blur-sm 
                    border ${tech.borderColor} shadow-md hover:${tech.shadowColor} hover:shadow-lg
                    transition-all duration-300 hover:scale-[1.02] hover:-translate-y-0.5
                    group ${tech.pattern} animate-pulse-slow`}
                  >
                    <div className="p-6 flex items-center justify-center">
                  {tech.icon}
                    </div>
                    
                    {/* Franja inferior para el nombre */}
                    <div className="absolute bottom-0 left-0 right-0 h-0 bg-white/10 dark:bg-black/20 backdrop-blur-sm 
                      group-hover:h-8 transition-all duration-300 flex items-center justify-center overflow-hidden">
                      <span className={`text-xs font-semibold ${tech.textColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100`}>
                        {tech.name}
                      </span>
                    </div>
                  </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      </div>
    </div>
  )
}

