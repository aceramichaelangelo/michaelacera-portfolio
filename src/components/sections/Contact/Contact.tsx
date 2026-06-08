"use client";

import React, { useState } from 'react';
import { contactData } from '@/data/contact';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Container } from '@/components/ui/Container';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Github, Linkedin, Facebook, Mail, Send } from 'lucide-react';
import { ExternalLink } from '@/components/shared/ExternalLink';
import { motion } from 'framer-motion';
import { MotionWrapper } from '@/components/shared/MotionWrapper';
import { StaggerItem } from '@/components/shared/StaggerItem';
import { AnimatedInput, AnimatedTextarea } from '@/components/ui/AnimatedField';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { hoverLift } from '@/lib/animations';

export const Contact: React.FC = () => {
  const shouldReduce = useReducedMotion();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    // Simulate API call for form submission
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1200);
  };

  const getSocialIcon = (platform: string) => {
    switch (platform.toLowerCase()) {
      case 'github': return <Github size={20} />;
      case 'linkedin': return <Linkedin size={20} />;
      case 'facebook': return <Facebook size={20} />;
      default: return <Mail size={20} />;
    }
  };

  return (
    <Section id="contact">
      <Container className="flex flex-col items-center">
        <SectionHeading
          title="Get In Touch"
          subtitle={contactData.headline}
        />

        <MotionWrapper variant="staggerContainer" className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-7xl w-full px-4">
          <StaggerItem className="lg:col-span-5 flex flex-col gap-6">
            <Card className="p-6 flex items-center gap-4 bg-gradient-to-br from-slate-950/45 to-cyan-950/10" glow>
              <div className="p-3 rounded-xl bg-cyan-950/40 text-cyan-400">
                <Mail size={24} />
              </div>
              <div>
                <h4 className="font-mono text-xs text-slate-400 font-bold uppercase tracking-wider mb-1">Direct Email</h4>
                <a href={`mailto:${contactData.email}`} className="text-sm sm:text-base font-medium text-white hover:text-cyan-400 transition-colors">
                  {contactData.email}
                </a>
              </div>
            </Card>

            {/* Social channels */}
            <div className="flex flex-col gap-4">
              <h3 className="text-base font-bold text-white font-mono px-1">Connect with me</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4">
                {contactData.socials.map((social) => (
                  <ExternalLink key={social.platform} href={social.url}>
                    <motion.div whileHover={shouldReduce ? undefined : hoverLift}>
                    <Card className="p-4 flex items-center gap-4 hover:border-cyan-500/20 group" interactive>
                      <div className="p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.04] text-slate-400 group-hover:text-cyan-400 group-hover:bg-cyan-950/20 group-hover:border-cyan-500/20 transition-colors duration-300">
                        {getSocialIcon(social.platform)}
                      </div>
                      <div>
                        <h4 className="text-xs text-slate-500 font-medium">{social.platform}</h4>
                        <span className="text-sm font-semibold text-slate-300 group-hover:text-white transition-colors duration-300">
                          {social.label}
                        </span>
                      </div>
                    </Card>
                    </motion.div>
                  </ExternalLink>
                ))}
              </div>
            </div>
          </StaggerItem>

          <StaggerItem className="lg:col-span-7">
            <Card className="p-6 md:p-8 h-full" glow>
              <h3 className="text-lg font-bold text-white font-mono mb-6">Send A Message</h3>

              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  
                  {/* Name field */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="name" className="font-mono text-[11px] text-slate-400 font-bold uppercase">Your Name</label>
                    <AnimatedInput
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="John Doe"
                    />
                  </div>

                  {/* Email field */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="email" className="font-mono text-[11px] text-slate-400 font-bold uppercase">Email Address</label>
                    <AnimatedInput
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="johndoe@example.com"
                    />
                  </div>

                </div>

                {/* Subject field */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="subject" className="font-mono text-[11px] text-slate-400 font-bold uppercase">Subject</label>
                  <AnimatedInput
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Project Inquiry / Hello"
                  />
                </div>

                {/* Message field */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className="font-mono text-[11px] text-slate-400 font-bold uppercase">Message</label>
                  <AnimatedTextarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Describe your project requirements or say hi..."
                  />
                </div>

                {/* Submit button */}
                <Button
                  type="submit"
                  variant="primary"
                  disabled={status === 'submitting'}
                  className="w-full py-3.5 font-mono text-xs uppercase tracking-widest gap-2 mt-2"
                >
                  <Send size={14} />
                  <span>{status === 'submitting' ? 'Sending Message...' : 'Send Message'}</span>
                </Button>

                {/* Status messages */}
                {status === 'success' && (
                  <p className="text-xs font-mono text-cyan-400 text-center mt-2 animate-pulse">
                    ✓ Message sent successfully! I will get back to you soon.
                  </p>
                )}
              </form>
            </Card>
          </StaggerItem>
        </MotionWrapper>
      </Container>
    </Section>
  );
};
