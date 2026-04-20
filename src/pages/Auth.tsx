import { ArrowRight, LayoutGrid, Key, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

function Auth() {
  return (
    <div className="min-h-screen bg-bg-primary text-text-primary selection:bg-stone-800 selection:text-white flex flex-col">
      {/* Minimal Header */}
      <nav className="flex items-center justify-between px-8 py-4 border-b border-border-primary bg-black">
        <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <div className="w-6 h-6 rounded flex items-center justify-center bg-transparent border border-border-primary">
            <LayoutGrid size={12} className="text-stone-400" />
          </div>
          <span className="text-xs font-bold font-geist tracking-wide">home</span>
        </Link>
      </nav>

      {/* Main Container - Mobile First Stacking perfectly */}
      <main className="flex-1 max-w-5xl w-full mx-auto p-6 md:p-12 flex flex-col md:flex-row gap-12 md:gap-24 mt-4 md:mt-12">

        {/* Card 1: Organiser Portal */}
        <section className="flex-1 flex flex-col">
          <div className="space-y-3 mb-10">
            <div className="flex items-center gap-2 text-[10px] font-mono text-stone-500 tracking-widest uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
              Administrator Space
            </div>
            <h2 className="text-4xl md:text-5xl font-bold font-geist tracking-tight text-white headline">Organiser Portal</h2>
            <p className="text-stone-400 text-sm font-mono max-w-sm">
              Your command center for full-scale event management and analytics.
            </p>
          </div>

          {/* Interactive List Items (from image_1.png data list style) */}
          <div className="border-t border-border-primary flex-1">
            <button className="w-full text-left flex items-center justify-between py-6 border-b border-border-primary group hover:bg-[#050505] transition-all px-2 -mx-2 rounded">
              <div className="flex flex-col gap-1">
                <span className="font-bold text-base font-geist text-stone-200 group-hover:text-white transition-colors">Existing Organizer Login</span>
                <span className="text-xs font-mono text-stone-500">Sign in to your dashboard</span>
              </div>
              <ArrowRight size={18} className="text-stone-600 group-hover:text-white transition-colors group-hover:translate-x-1" />
            </button>
            <button className="w-full text-left flex items-center justify-between py-6 border-b border-border-primary group hover:bg-[#050505] transition-all px-2 -mx-2 rounded">
              <div className="flex flex-col gap-1">
                <span className="font-bold text-base font-geist text-stone-200 group-hover:text-white transition-colors">Create new organizer account</span>
                <span className="text-xs font-mono text-stone-500">Sign Up (Onboarding flow)</span>
              </div>
              <ArrowRight size={18} className="text-stone-600 group-hover:text-white transition-colors group-hover:translate-x-1" />
            </button>
          </div>

          {/* Input focus state matching search bar flyout */}
          <div className="mt-8">
            <label className="text-[10px] font-mono tracking-widest uppercase text-stone-500 mb-3 block">Quick Action / Command</label>
            <input
              type="text"
              placeholder="Enter invite code or domain..."
              className="w-full bg-[#080808] border border-border-primary text-stone-300 text-xs font-mono rounded-md py-4 px-4 focus:outline-none focus:border-stone-500 focus:ring-1 focus:ring-stone-500/50 focus:bg-[#0f0f0f] transition-all placeholder:text-stone-600 shadow-[0_0_15px_rgba(0,0,0,0.5)] focus:shadow-[0_0_20px_rgba(255,255,255,0.05)]"
            />
          </div>
        </section>

        {/* Desktop Divider */}
        <div className="hidden md:block w-px bg-border-primary opacity-30 mt-8 mb-24"></div>

        {/* Card 2: Attendee Concierge */}
        <section className="flex-1 flex flex-col">
          <div className="space-y-3 mb-10">
            <div className="flex items-center gap-2 text-[10px] font-mono text-stone-500 tracking-widest uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
              Guest Access
            </div>
            <h2 className="text-4xl md:text-5xl font-bold font-geist tracking-tight text-white headline">Attendee Concierge</h2>
            <p className="text-stone-400 text-sm font-mono max-w-sm">
              Discover, navigate, and engage with events frictionlessly.
            </p>
          </div>

          {/* 'Recently Opened' list items from image_0.png style */}
          <div className="space-y-1">
            <div className="text-[10px] text-stone-500 mb-6 font-mono tracking-widest uppercase pb-4 border-b border-border-primary flex items-center justify-between">
              <span>EASY LOGIN OAUTH OPTIONS</span>
              <span className="text-[9px]">2 ITEMS</span>
            </div>

            <div className="flex items-center justify-between py-4 border-b border-border-primary border-opacity-50 hover:bg-[#080808] transition-colors cursor-pointer group px-3 -mx-3 rounded-md">
              <div className="flex items-center gap-4">
                <div className="bg-stone-200 text-black px-2 py-1 text-[10px] font-mono rounded shadow flex items-center justify-center">
                  <Mail size={12} strokeWidth={2.5} />
                </div>
                <span className="text-xs font-mono font-medium text-stone-300 group-hover:text-white transition-colors">Log in with Google</span>
              </div>
              <span className="text-[10px] text-stone-600 group-hover:text-stone-400 font-mono transition-colors">Open &rarr;</span>
            </div>

            <div className="flex items-center justify-between py-4 border-b border-border-primary border-opacity-50 hover:bg-[#080808] transition-colors cursor-pointer group px-3 -mx-3 rounded-md">
              <div className="flex items-center gap-4">
                <div className="bg-stone-200 text-black px-2 py-1 text-[10px] font-mono rounded shadow flex items-center justify-center">
                  <Key size={12} strokeWidth={2.5} />
                </div>
                <span className="text-xs font-mono font-medium text-stone-300 group-hover:text-white transition-colors">Netfyo EasyLogin (Passkey)</span>
              </div>
              <span className="text-[10px] text-stone-600 group-hover:text-stone-400 font-mono transition-colors">Open &rarr;</span>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}

export default Auth;
