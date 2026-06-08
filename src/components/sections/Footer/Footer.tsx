"use client";

import React from 'react';
import { footerData, heroData, siteConfig, navLinks } from '@/data';
import { Container } from '@/components/ui/Container';
import { Badge } from '@/components/ui/Badge';
import { Divider } from '@/components/ui/Divider';
import { useScrollTo } from '@/hooks/useScrollTo';
import { Github, Linkedin, Facebook } from 'lucide-react';
import { ExternalLink } from '@/components/shared/ExternalLink';
import { MotionWrapper } from '@/components/shared/MotionWrapper';

export const Footer: React.FC = () => {
  const scrollTo = useScrollTo();

  const handleNavClick = (href: string) => {
    scrollTo(href.substring(1));
  };

  return (
    <footer className="relative bg-[#030014] border-t border-white/[0.05] pt-16 pb-8 overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[60%] h-[150px] rounded-full bg-purple-900/10 blur-[80px] pointer-events-none" />

      <Container className="relative z-10">
        <MotionWrapper variant="fadeInUp" className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-12">
          
          {/* Col 1: Bio & Initials (md:col-span-6) */}
          <div className="md:col-span-6 flex flex-col items-start gap-4">
            <h3 className="text-2xl font-bold tracking-widest text-white font-mono bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">
              MAA
            </h3>
            
            <p className="text-xs text-slate-400 leading-relaxed max-w-md font-mono">
              {footerData.text}
            </p>
            
            {/* Display Roles */}
            <div className="flex flex-wrap gap-2 mt-2">
              {heroData.roles.map((role) => (
                <span key={role} className="text-[10px] font-mono text-cyan-400/80 bg-cyan-950/20 px-2 py-0.5 rounded border border-cyan-500/10">
                  {role}
                </span>
              ))}
            </div>
          </div>

          {/* Col 2: Navigation Links (md:col-span-3) */}
          <div className="md:col-span-3 flex flex-col items-start gap-4">
            <h4 className="text-xs font-bold font-mono uppercase text-slate-300 tracking-wider">Quick Navigation</h4>
            <div className="grid grid-cols-2 gap-x-6 gap-y-2.5">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.href)}
                  className="text-xs font-mono text-slate-400 hover:text-cyan-400 text-left transition-colors duration-200"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Col 3: Social Connections (md:col-span-3) */}
          <div className="md:col-span-3 flex flex-col items-start gap-4">
            <h4 className="text-xs font-bold font-mono uppercase text-slate-300 tracking-wider">Social Channels</h4>
            <p className="text-[11px] text-slate-400 font-mono">Let&apos;s build something together.</p>
            <div className="flex items-center gap-3">
              <ExternalLink href="https://github.com" aria-label="GitHub" className="p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.05] text-slate-400 hover:text-white hover:border-cyan-500/20 hover:shadow-[0_0_10px_rgba(6,182,212,0.15)] transition-all">
                <Github size={16} />
              </ExternalLink>
              <ExternalLink href="https://linkedin.com" aria-label="LinkedIn" className="p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.05] text-slate-400 hover:text-white hover:border-cyan-500/20 hover:shadow-[0_0_10px_rgba(6,182,212,0.15)] transition-all">
                <Linkedin size={16} />
              </ExternalLink>
              <ExternalLink href="https://facebook.com" aria-label="Facebook" className="p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.05] text-slate-400 hover:text-white hover:border-cyan-500/20 hover:shadow-[0_0_10px_rgba(6,182,212,0.15)] transition-all">
                <Facebook size={16} />
              </ExternalLink>
            </div>
          </div>

        </MotionWrapper>

        <Divider className="opacity-50" />

        {/* Bottom Bar: Copyright & Tech */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-8">
          {/* Copyright */}
          <div className="text-[11px] text-slate-500 font-mono">
            {siteConfig.copyright}
          </div>

          {/* Built With stack */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            <span className="text-[10px] text-slate-600 font-mono uppercase font-bold tracking-wider mr-1">Crafted with:</span>
            {footerData.builtWith.map((tech) => (
              <Badge key={tech} variant="slate" className="text-[9px] font-mono px-2 py-0.5">
                {tech}
              </Badge>
            ))}
          </div>
        </div>

      </Container>
    </footer>
  );
};
