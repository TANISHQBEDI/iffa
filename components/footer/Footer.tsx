import { FOOTER_ACKNOWLEDGEMENT, FOOTER_LINKS } from '@/lib/constants'
import { FOOTER_SOCIALS } from '@/lib/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'
import { FaFacebook } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import { FaYoutube } from 'react-icons/fa'

const Footer = () => {
  const iconMap: Record<SocialLink['icon'], React.ReactNode> = {
    facebook: <FaFacebook />,
    instagram: <FaInstagram />,
    linkedin: <FaLinkedin />,
    youtube: <FaYoutube />,
  }

  return (
    <div className="footer-container">


      <div className="footer-item footer-acknowledgement">
        <Image src="/assets/flags.png" alt="Flags" width={100} height={100}/>
        <span>
          {FOOTER_ACKNOWLEDGEMENT}
        </span>
      </div>


      <div className="footer-item footer-links">
        <Link href="/" className="brand">
          <Image
            src="/icon0.svg"
            alt="IFFA Awards Logo"
            width={150}
            height={50}
            className="h-14 w-auto cursor-pointer "
          />
        </Link>
        <nav className="footer-linklist" aria-label="Footer">
          {FOOTER_LINKS.map((item) => (
            <Link aria-label={item.label} key={item.label} href={item.href} className="footer-link">
              <Button variant="ghost" size="sm" className="footer-link-btn">
                {item.label}
              </Button>
            </Link>
          ))}
        </nav>
      </div>


      <div className="footer-item footer-socials">
        <p className="footer-socials-title">Follow us</p>
        <div className="socials-list" suppressHydrationWarning>
          {FOOTER_SOCIALS.map((s) => (
            <Link key={s.label} href={s.href} aria-label={s.label} className="social-icon" target="_blank" rel="noopener noreferrer">
              {iconMap[s.icon]}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Footer