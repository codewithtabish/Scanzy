'use client'

import React, { useEffect, useState } from 'react'
import { Button } from '../ui/button'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Badge } from '../ui/badge'
import { useTheme } from 'next-themes'
import { usePathname } from 'next/navigation'
import { ModeToggle } from './theme-toggle'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'
// @ts-ignore
import { dark } from '@clerk/themes'
import { Menu } from 'lucide-react'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'

const sections = ['hero-section', 'how-it-work', 'feature', 'feedbacks', 'pricing']

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('hero-section')
  const [open, setOpen] = useState(false)
  const { resolvedTheme } = useTheme()
  const clerkTheme = resolvedTheme === 'dark' ? dark : undefined
  const pathName = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.6 }
    )
    sections.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
    setOpen(false)
  }

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setOpen(false)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur transition-all"
    >
      <div
        className={`mx-auto flex items-center justify-between py-4 md:px-4 px-6 transition-all duration-300 ${
          isScrolled ? 'max-w-4xl border-2 rounded-full p-5 mt-10' : 'max-w-6xl'
        }`}
      >
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/header-logo.png"
            alt="header-logo"
            width={40}
            height={40}
            className="object-cover w-10 h-10"
          />
          <h1 className="font-bold text-lg">
            SCA<span className="italic text-primary">N</span>zy -
            <strong className="ml-1 px-2 text-sm rotate-180 italic rounded-md">AI</strong>
          </h1>
        </Link>

        {pathName === '/' && (
          <div className="hidden md:flex items-center gap-6 text-sm">
            {sections.map((id) => (
              <motion.a
                key={id}
                href={`#${id}`}
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection(id)
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`hover:text-primary ${
                  activeSection === id ? 'text-primary font-semibold' : ''
                } ${
                  id === 'hero-section'
                    ? 'px-4 py-1 rounded-full border ' +
                      (activeSection === 'hero-section'
                        ? 'border-primary'
                        : 'border-transparent')
                    : ''
                }`}
              >
                {id.replace(/-/g, ' ').replace(/\b\w/g, (char) => char.toUpperCase())}
              </motion.a>
            ))}
          </div>
        )}

        <div className="hidden md:flex gap-6 items-center">
          <SignedIn />
          <ModeToggle />
          <div>
            <SignedIn>
              <UserButton appearance={{ baseTheme: clerkTheme }} />
            </SignedIn>
            <SignedOut>
              <SignInButton>
                <Badge className="cursor-pointer" variant="outline">
                  <span>Login</span>
                </Badge>
              </SignInButton>
            </SignedOut>
          </div>
        </div>

        {/* Mobile Menu Sheet */}
        <div className="md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger>
              <Menu className="w-6 h-6" />
            </SheetTrigger>
            <SheetContent side="right" className="w-[85%] max-w-sm px-6 py-6">
              <SheetHeader>
                <SheetTitle className="text-left text-lg flex items-center justify-between">
                  Menu <ModeToggle />
                </SheetTitle>
              </SheetHeader>
              <div className="mt-6 flex flex-col gap-4 text-sm">
                {sections.map((id) => (
                  <a
                    key={id}
                    href={`#${id}`}
                    className={`$${
                      activeSection === id ? 'text-primary font-semibold' : ''
                    }`}
                    onClick={(e) => {
                      e.preventDefault()
                      scrollToSection(id)
                    }}
                  >
                    {id.replace(/-/g, ' ').replace(/\b\w/g, (char) => char.toUpperCase())}
                  </a>
                ))}
                <Button size="sm" className="mt-4">
                  Try for free
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  )
}

export default Header
