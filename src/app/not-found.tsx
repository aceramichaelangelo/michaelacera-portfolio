import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#030014] text-slate-100 p-4 font-sans">
      <Card className="max-w-md w-full p-8 text-center flex flex-col items-center gap-6" glow>
        <span className="font-mono text-xs font-bold text-cyan-400 bg-cyan-950/40 px-3 py-1 rounded-full border border-cyan-500/20 uppercase tracking-widest">
          404 Error
        </span>
        <h1 className="text-3xl font-extrabold text-white">Page Not Found</h1>
        <p className="text-sm text-slate-400 leading-relaxed font-mono">
          The requested page could not be located. It might have been moved or removed.
        </p>
        <Link href="/" className="w-full">
          <Button variant="primary" className="w-full gap-2 py-3 font-mono text-xs uppercase tracking-widest">
            <Home size={14} />
            <span>Back To Home</span>
          </Button>
        </Link>
      </Card>
    </div>
  );
}
