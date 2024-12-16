"use client";

import { useState } from 'react'
import Link from "next/link"
import Image from "next/image"
import { Send, Twitter, Copy, Check, GemIcon as Treasure } from 'lucide-react'

export default function Page() {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = async () => {
    const ca = "0x79f443ad21fd0e24e6d968b4f9b285d6c8a3cb43399f1100123319026080a3ff::finn::FINN"
    await navigator.clipboard.writeText(ca)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="min-h-screen bg-[#87CEEB] text-[#050A30]">
      {/* Logo Section */}
      <div className="container mx-auto pt-8 md:pt-12 px-4">
        <div className="relative w-full max-w-2xl mx-auto mb-8 md:mb-16">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-center bg-gradient-to-b from-[#050A30] to-[#1E3A8A] text-transparent bg-clip-text">
            $FINN
          </h1>
        </div>

        {/* Icon Navigation */}
        <div className="flex justify-center gap-6 md:gap-8 mb-12 md:mb-24">
          <Link href="https://x.com/FinnTheSharkoon" className="text-[#050A30] hover:text-[#1E3A8A] transition-colors">
            <Twitter className="w-5 h-5 md:w-6 md:h-6" />
          </Link>
          <Link href="https://t.me/finnthesharkoon" className="text-[#050A30] hover:text-[#1E3A8A] transition-colors">
            <Send className="w-5 h-5 md:w-6 md:h-6" />
          </Link>

        </div>

        {/* Content Section */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center max-w-6xl mx-auto">
          <div className="space-y-4 md:space-y-6 px-4">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold">
              Who is<br />Finn The Sharkoon?
            </h2>
            <p className="text-base md:text-lg text-gray-700">
              Finn the trashpanda of the seas, why don u come and swem wit me i gibe protec to anyone ho joins mi flock            </p>
            <Link
              href="https://movepump.com/token/0x79f443ad21fd0e24e6d968b4f9b285d6c8a3cb43399f1100123319026080a3ff::finn:FINN"
              className="inline-block border-2 border-[#050A30] text-[#050A30] px-6 md:px-8 py-2 md:py-3 rounded-full hover:bg-[#050A30] hover:text-white transition-colors text-sm md:text-base"
            >
              Buy Now !!
            </Link>
            <div className="mt-4 bg-white/80 p-3 md:p-4 rounded-lg flex items-center justify-between">
              <code className="text-xs md:text-sm text-[#050A30] break-all">
                0x79f443ad21fd0e24e6d968b4f9b285d6c8a3cb43399f1100123319026080a3ff::finn::FINN
              </code>
              <button
                onClick={copyToClipboard}
                className="ml-2 p-2 rounded-full bg-[#050A30]/10 hover:bg-[#050A30]/20 transition-colors flex-shrink-0"
                aria-label="Copy contract address"
              >
                {copied ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4 text-[#050A30]" />}
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square bg-white/20 rounded-[40px] overflow-hidden">
              <Image
                src="/mascot.png"
                alt="Jack Suiparrow character"
                layout="fill"
                objectFit="contain"
                quality={100}
                priority
                className='rounded-[40px]'
              />
            </div>
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <section className="mt-16 md:mt-24 bg-white/30 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12"> Gallery</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">

            <div className="aspect-square bg-white/50 rounded-2xl overflow-hidden">
              <Image
                src="/gallery-6.png"
                alt="Jack Suiparrow with elon Musk"
                width={400}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-square bg-white/50 rounded-2xl overflow-hidden">
              <Image
                src="/gallery-2.png"
                alt="Jack Suiparrow with computer"
                width={400}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-square bg-white/50 rounded-2xl overflow-hidden">
              <Image
                src="/gallery-3.png"
                alt="Jack Suiparrow with sui coin"
                width={400}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-square bg-white/50 rounded-2xl overflow-hidden">
              <Image
                src="/gallery-4.png"
                alt="Jack Suiparrow Pointing"
                width={400}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-square bg-white/50 rounded-2xl overflow-hidden">
              <Image
                src="/gallery-5.png"
                alt="Jack Suiparrow Pointing"
                width={400}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-square bg-white/50 rounded-2xl overflow-hidden">
              <Image
                src="/gallery-1.png"
                alt="Jack Suiparrow Pointing"
                width={400}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>

          </div>
        </div>
      </section>

      {/* Important Links Section */}
      <section className="mt-16 md:mt-24">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 max-w-2xl mx-auto">
            <Link
              href="https://movepump.com/token/0x79f443ad21fd0e24e6d968b4f9b285d6c8a3cb43399f1100123319026080a3ff::finn::FINN"
              className="px-6 md:px-8 py-2 md:py-3 rounded-full border-2 border-[#050A30] bg-[#050A30] text-white hover:bg-transparent hover:text-[#050A30] transition-colors text-sm md:text-base"
            >
              Buy $FINN
            </Link>

            <Link
              href="https://movepump.com/token/0x79f443ad21fd0e24e6d968b4f9b285d6c8a3cb43399f1100123319026080a3ff::finn::FINN"
              className="px-6 md:px-8 py-2 md:py-3 rounded-full border-2 border-[#050A30] hover:bg-[#050A30] hover:text-white transition-colors text-sm md:text-base flex items-center gap-2"
            >
              <Treasure className="w-4 h-4" />
              <span>Chart</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Socials Section */}
      <footer className="mt-16 md:mt-24 pb-8 md:pb-12">
        <div className="max-w-4xl mx-auto px-4">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-6 md:mb-8">Join Our Community</h3>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            <SocialLink href="https://x.com/FinnTheSharkoon" icon={<Twitter className="w-5 h-5 md:w-6 md:h-6" />} label="Twitter" />
            <SocialLink href="https://t.me/finnthesharkoon" icon={<Send className="w-5 h-5 md:w-6 md:h-6" />} label="Telegram" />
          </div>
        </div>
      </footer>
    </div>
  )
}

interface SocialLinkProps {
  href: string
  icon: React.ReactNode
  label: string
}

function SocialLink({ href, icon, label }: SocialLinkProps) {
  return (
    <Link
      href={href}
      className="flex flex-col items-center space-y-2 text-[#050A30] hover:text-[#1E3A8A] transition-colors"
    >
      <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/50 flex items-center justify-center">
        {icon}
      </div>
      <span className="text-xs md:text-sm">{label}</span>
    </Link>
  )
}

