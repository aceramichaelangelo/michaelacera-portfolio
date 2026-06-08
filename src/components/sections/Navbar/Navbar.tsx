"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { navLinks } from '@/data';
import { useScrollTo } from '@/hooks/useScrollTo';
import { useActiveSection } from '@/hooks/useActiveSection';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { fadeInDown } from '@/lib/animations';
import { Menu, X } from 'lucide-react';
import { Container } from '@/components/ui/Container';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const shouldReduce = useReducedMotion();

  const scrollTo = useScrollTo();
  const activeSection = useActiveSection(navLinks.map((link) => link.href.substring(1)));

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    scrollTo(href.substring(1));
  };

  const navContent = (
    <>
      <Container className="flex items-center justify-between">
        <motion.button
          onClick={() => handleNavClick('#hero')}
          className="text-xl font-bold tracking-wider text-white font-mono bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500 hover:opacity-85 transition-opacity"
          whileHover={shouldReduce ? undefined : { scale: 1.03 }}
          whileTap={shouldReduce ? undefined : { scale: 0.97 }}
        >
          My Portfolio
        </motion.button>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isLinkActive = activeSection === link.href.substring(1);
            return (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className={`text-sm font-mono tracking-wide transition-colors duration-300 relative py-1 hover:text-white ${
                  isLinkActive ? 'text-cyan-400' : 'text-slate-400'
                }`}
              >
                <motion.span
                  className="inline-block"
                  whileHover={shouldReduce ? undefined : { y: -1 }}
                  transition={{ duration: 0.2 }}
                >
                  {link.label}
                </motion.span>
                {isLinkActive && (
                  shouldReduce ? (
                    <span className="absolute bottom-0 left-0 w-full h-[2px] rounded-full bg-gradient-to-r from-accentPurple to-accentCyan" />
                  ) : (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute bottom-0 left-0 w-full h-[2px] rounded-full bg-gradient-to-r from-accentPurple to-accentCyan"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )
                )}
              </button>
            );
          })}
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-slate-400 hover:text-white transition-colors p-1"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </Container>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={shouldReduce ? false : { opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={shouldReduce ? undefined : { opacity: 0, x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="md:hidden fixed inset-0 top-[65px] w-full bg-[#06041c]/98 backdrop-blur-xl z-40 border-t border-cyan-500/20 flex flex-col p-6"
          >
            <motion.div
              initial={shouldReduce ? false : 'hidden'}
              animate="visible"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.06 } },
              }}
              className="flex flex-col gap-6 items-center justify-center h-full max-w-sm mx-auto w-full"
            >
              {navLinks.map((link) => {
                const isLinkActive = activeSection === link.href.substring(1);
                return (
                  <motion.button
                    key={link.label}
                    variants={{
                      hidden: { opacity: 0, y: 16 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    onClick={() => handleNavClick(link.href)}
                    className={`text-lg font-mono font-medium tracking-widest py-2 transition-colors duration-300 ${
                      isLinkActive ? 'text-cyan-400' : 'text-slate-400'
                    }`}
                  >
                    {link.label}
                  </motion.button>
                );
              })}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );

  if (shouldReduce) {
    return (
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#06041c]/95 backdrop-blur-md border-b border-cyan-500/30 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.8)]'
            : 'bg-[#040214]/90 backdrop-blur-sm border-b border-white/[0.08] py-5 shadow-md shadow-black/30'
        }`}
      >
        {navContent}
      </nav>
    );
  }

  return (
    <motion.nav
      variants={fadeInDown}
      initial="hidden"
      animate="visible"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-[#06041c]/95 backdrop-blur-md border-b border-cyan-500/30 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.8)] shadow-cyan-950/20'
          : 'bg-[#040214]/90 backdrop-blur-sm border-b border-white/[0.08] py-5 shadow-md shadow-black/30'
      }`}
    >
      {navContent}
    </motion.nav>
  );
};
