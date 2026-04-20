import { useState } from 'react';
import { Search, LayoutGrid, Moon, Home, Command } from 'lucide-react';
import { Link } from 'react-router-dom';

function Landing() {
  const [accent] = useState('#ffffff');
  
  return (
    <div className="min-h-screen bg-bg-primary text-text-primary selection:bg-stone-800 selection:text-white">
      <nav className="flex items-center justify-between px-8 py-3 border-b border-border-primary bg-black">
        <div className="flex items-center gap-4 min-w-[200px]">
          <div className="w-6 h-6 rounded flex items-center justify-center">
            <LayoutGrid size={18} className="text-white" />
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-bold font-geist tracking-wide">netfyo</span>
            <span className="text-[10px] text-stone-500 font-mono tracking-widest uppercase">EVENT OS</span>
          </div>
        </div>
        
        <div className="hidden md:flex flex-1 max-w-xl mx-8 relative">
          <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-500" />
          <input 
            type="text" 
            placeholder="Search events, analytics, or attendees..." 
            className="w-full bg-[#0a0a0a] border border-border-primary text-stone-300 text-xs font-mono rounded pl-9 pr-10 py-2 focus:outline-none focus:border-stone-600 transition-colors"
          />
          <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1 text-[10px] text-stone-500 border border-border-primary px-1.5 py-0.5 rounded bg-black">
            <Command size={10} />
            <span>K</span>
          </div>
        </div>

        <div className="flex items-center gap-6 text-stone-400 min-w-[200px] justify-end">
          <Link to="/auth" className="hover:text-white transition-colors flex items-center gap-2 border border-border-primary rounded px-3 py-1.5 text-xs">
            <span className="font-geist">Log In</span>
            <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
          </Link>
          <Home size={16} className="cursor-pointer hover:text-white transition-colors" />
          <Moon size={16} className="cursor-pointer text-white transition-colors" />
        </div>
      </nav>

      <main className="max-w-[1000px] mx-auto p-8 space-y-6 mt-16 pb-32">
        <div className="space-y-4 mb-20">
          <div className="flex items-center gap-2 text-[11px] font-mono text-stone-500 tracking-widest uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
            WELCOME BACK
          </div>
          <h1 className="text-6xl md:text-7xl font-bold tracking-tight headline leading-[1.05]">
            Your event OS, <span className="italic font-normal text-stone-300">optimised.</span>
          </h1>
          <p className="text-stone-400 max-w-xl text-sm leading-relaxed mt-6">
            A clean, focused toolkit for organisers and attendees—built so you can experience events with zero friction.
          </p>
        </div>

        <div className="flex items-center justify-between border-b border-border-primary pb-4 mb-8">
          <span className="text-[10px] font-mono text-stone-500 tracking-widest uppercase">CORE MODULES</span>
          <span className="text-[10px] font-mono text-stone-500 tracking-widest uppercase">3 ACTIVE</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-border-primary rounded bg-black overflow-hidden divide-y md:divide-y-0 md:divide-x divide-border-primary">
          <div className="p-8 hover:bg-[#050505] transition-colors cursor-pointer group">
            <div className="text-[10px] text-stone-500 mb-6 font-mono tracking-widest uppercase">Module 01</div>
            <h3 className="font-bold text-lg mb-3 font-geist group-hover:text-white text-stone-100 transition-colors">Organizer Suite</h3>
            <p className="text-stone-400 text-xs leading-relaxed font-mono">
              Ticketing, analytics, and CRM dashboard for seamless command.
            </p>
            <div className="mt-8 flex items-center justify-between text-[10px] font-mono text-stone-500">
              <span className="opacity-0 group-hover:opacity-100 transition-opacity">Explore ↗</span>
            </div>
          </div>

          <div className="p-8 hover:bg-[#050505] transition-colors cursor-pointer group">
            <div className="text-[10px] text-stone-500 mb-6 font-mono tracking-widest uppercase">Module 02</div>
            <h3 className="font-bold text-lg mb-3 font-geist group-hover:text-white text-stone-100 transition-colors">AI Assistant (NETFYO Concierge)</h3>
            <p className="text-stone-400 text-xs leading-relaxed font-mono">
              The challenge component: A smart, context-aware assistant powered by Google Gemini.
            </p>
            <div className="mt-8 flex items-center justify-between text-[10px] font-mono text-stone-500">
              <span className="opacity-0 group-hover:opacity-100 transition-opacity">Explore ↗</span>
            </div>
          </div>

          <div className="p-8 hover:bg-[#050505] transition-colors cursor-pointer group bg-[#020202]">
            <div className="text-[10px] text-stone-500 mb-6 font-mono tracking-widest uppercase">Module 03</div>
            <h3 className="font-bold text-lg mb-3 font-geist group-hover:text-white text-stone-100 transition-colors">Dynamic Event Intelligence</h3>
            <p className="text-stone-400 text-xs leading-relaxed font-mono">
              Real-time navigation, live schedule updates, and interactive maps.
            </p>
            <div className="mt-8 flex items-center justify-between text-[10px] font-mono text-stone-500">
              <span className="opacity-0 group-hover:opacity-100 transition-opacity">Explore ↗</span>
            </div>
          </div>
        </div>
      </main>
      
      <style>{`
        :root {
          --accent-color: ${accent};
        }
      `}</style>
    </div>
  );
}

export default Landing;
