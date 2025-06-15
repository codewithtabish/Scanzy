'use client';

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { SignIn, SignInButton, SignOutButton } from "@clerk/nextjs";
import Image from "next/image";

export default function CallToAction() {
  return (
    <section className="dark:bg-black/5 bg-[#F9F9F9]">
      <div className="max-w-6xl mx-auto rounded-b-4xl flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-0 px-6 md:px-20 py-10">
        {/* Text Content */}
        <div className="w-full lg:w-[500px] text-center lg:text-left order-2 lg:order-1">
          <h2 className="dark:text-white text-black text-3xl font-medium font-['Space_Grotesk']">
            Let’s make things happen
          </h2>
          <p className="my-7 dark:text-gray-300 text-black text-lg font-normal font-['Space_Grotesk']">
            Contact us today to see how our AI-powered content detection and plagiarism checker can help keep your work original and secure.
          </p>
          <SignOutButton >
            <SignInButton>
              <Button className="px-9 py-5 text-xl rounded-2xl cursor-pointer  font-['Space_Grotesk'] leading-7">
            Get your free proposal
          </Button>
            </SignInButton>
          </SignOutButton>
        </div>

        {/* SVG Illustration */}
        <div className="w-full max-w-[360px] h-auto order-1 lg:order-2">
          {/* Paste your SVG directly here */}
          <Image
          src={'/images/call-to-1.png'}
          width={220}
          height={220}
          alt="call to image"
          className="object-cover w-full h-full"
          />
        </div>
      </div>
    </section>
  );
}
