'use client'

import React, { useEffect, useState } from 'react'
import { Button } from '../ui/button'
import { motion } from 'framer-motion'
import Image from 'next/image'
// import { ThemeModeToggle } from './mode-toggle-button'
import Link from 'next/link'
// import { SignedIn, SignedOut, SignInButton,  UserButton } from '@clerk/nextjs'
import { Badge } from '../ui/badge'
import { useTheme } from 'next-themes'
// import { dark } from '@clerk/themes'
import { Upload } from 'lucide-react'
import { usePathname } from 'next/navigation'

const sections = ['hero-section', 'how-it-work', 'feature', 'feedbacks','pricing']

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('hero-section')
  const [menuOpen, setMenuOpen] = useState(false)
  const { resolvedTheme } = useTheme();
//   const clerkTheme = resolvedTheme === 'dark' ? dark : undefined;
  const pathName=usePathname()

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

  useEffect(() => {
    const setInitialActiveSection = () => {
      for (const id of sections) {
        const el = document.getElementById(id)
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= window.innerHeight * 0.4 && rect.bottom >= 0) {
            setActiveSection(id)
            break
          }
        }
      }
    }

    setInitialActiveSection()
    window.addEventListener('load', setInitialActiveSection)

    return () => window.removeEventListener('load', setInitialActiveSection)
  }, [])

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur transition-all"
    >
      <div
        className={`mx-auto flex items-center justify-between ${
          isScrolled ? 'max-w-4xl border-2 rounded-full p-5 mt-10' : 'max-w-6xl'
        } transition-all duration-300 py-4 md:px-4 px-6`}
      >
        {/* Logo */}
        <Link href={'/'} className="flex items-center gap-3">
          <Image
            src="/images/header-logo.png"
            alt="header-logo"
            width={40}
            height={40}
            className="object-cover w-10 h-10"
          />
          <h1 className="font-bold text-lg">SUMMARIZER</h1>
        </Link>

        {/* Desktop Menu */}
       {
        pathName=='/'&&
         <div className="hidden md:flex items-center gap-6 text-sm">
          {sections.map((id) => (
            <motion.a
              key={id}
              href={`#${id}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`hover:text-primary ${
                activeSection === id ? 'text-primary font-semibold' : ''
              } ${id === 'hero-section' ? 'px-4 py-1 rounded-full border ' +
                (activeSection === 'hero-section'
                  ? 'border-primary'
                  : 'border-transparent') : ''}`}
            >
              {id
                .replace(/-/g, ' ')
                .replace(/\b\w/g, (char) => char.toUpperCase())}
            </motion.a>
          ))}
        </div>
       }

        {/* Actions */}
        <div className="hidden md:flex gap-6 items-center">
          {/* <SignedIn>
          <Button size="sm" variant={'ghost'} className='border-[1px] p-1  px-3'>
            <Link href={'/upload'}>
            <Upload/>
            </Link>
            
          </Button>

          </SignedIn> */}
        {/* <ThemeModeToggle /> */}
        <div>
  {/* When user is signed in */}
  {/* <SignedIn> */}
    {/* <UserButton  */}
    {/* // appearance={{baseTheme:clerkTheme}} */}
    {/* /> */}
    {/* <SignOutButton>
      <Badge className='cursor-pointer' variant='outline'>
        <span>Logout</span>
      </Badge>
    </SignOutButton> */}
  {/* </SignedIn> */}

  {/* When user is signed out */}
  {/* <SignedOut>
    <SignInButton>
      <Badge className='cursor-pointer' variant='outline'>
        <span>Login</span>
      </Badge>
    </SignInButton>
  </SignedOut> */}
</div>
          {/* check if login or logout */}
   
        </div>


        {/* Mobile Theme Toggle */}
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-black shadow-md border-t border-gray-200 dark:border-gray-800">
          <div className="flex flex-col px-6 py-4 space-y-3 text-sm">
            {sections.map((id) => (
              <a
                key={id}
                href={`#${id}`}
                className={`${
                  activeSection === id ? 'text-orange-600 font-semibold' : ''
                }`}
                onClick={() => setMenuOpen(false)}
              >
                {id
                  .replace(/-/g, ' ')
                  .replace(/\b\w/g, (char) => char.toUpperCase())}
              </a>
            ))}
            <Button size="sm" className="w-full">
              Try for free
            </Button>
          </div>
        </div>
      )}
    </motion.header>
  )
}

export default Header
