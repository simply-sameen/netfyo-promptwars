import React, { useState } from 'react';
import { LayoutGrid, Search, Command, Home, Moon, Plus, X, Settings2 } from 'lucide-react';
import { Link } from 'react-router-dom';

function Admin() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [accentColor, setAccentColor] = useState('#39FF14'); // Default Neon Green

  const accentOptions = [
    { name: 'Neon Green', hex: '#39FF14' },
    { name: 'Jade Green', hex: '#00A36C' },
    { name: 'Lime Green', hex: '#BEF264' },
    { name: 'Dark Green', hex: '#166534' }
  ];

  return (
    <div 
      className="min-h-screen bg-bg-primary text-text-primary selection:bg-stone-800 selection:text-white relative"
      style={{ '--color-accent': accentColor } as React.CSSProperties}
    >
      <nav className="flex items-center justify-between px-8 py-3 border-b border-border-primary bg-black">
        <div className="flex items-center gap-4 min-w-[200px]">
          <div className="w-6 h-6 rounded flex items-center justify-center">
            <LayoutGrid size={18} className="text-white" />
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-bold font-geist tracking-wide">netfyo</span>
            <span className="text-[10px] text-stone-500 font-mono tracking-widest uppercase">ADMIN PANEL</span>
          </div>
        </div>
        
        <div className="hidden md:flex flex-1 max-w-xl mx-8 relative">
          <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-500" />
          <input 
            type="text" 
            placeholder="Search settings, permissions, integrations..." 
            className="w-full bg-[#0a0a0a] border border-border-primary text-stone-300 text-xs font-mono rounded pl-9 pr-10 py-2 focus:outline-none focus:border-stone-600 transition-colors"
          />
          <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1 text-[10px] text-stone-500 border border-border-primary px-1.5 py-0.5 rounded bg-black">
            <Command size={10} />
            <span>K</span>
          </div>
        </div>

        <div className="flex items-center gap-6 text-stone-400 min-w-[200px] justify-end">
          <Link to="/" className="hover:text-white transition-colors flex items-center gap-2 border border-border-primary rounded px-3 py-1.5 text-xs">
            <span className="font-geist">Exit Admin</span>
            <div className="w-1.5 h-1.5 rounded-full bg-red-500"></div>
          </Link>
        </div>
      </nav>

      <main className="max-w-[1000px] mx-auto p-8 space-y-6 mt-16 pb-32">
        <div className="space-y-4 mb-20">
          <div className="flex items-center gap-2 text-[11px] font-mono text-stone-500 tracking-widest uppercase">
            <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: 'var(--color-accent)' }}></span>
            AUTHORIZED ACCESS ONLY
          </div>
          <h1 className="text-6xl md:text-7xl font-bold tracking-tight headline leading-[1.05]">
            Event OS <span className="italic font-normal text-stone-300">Settings.</span>
          </h1>
          <p className="text-stone-400 max-w-xl text-sm leading-relaxed mt-6">
            Global configuration dashboard. Adjust core structural components, manage deployment environments, and customize tenant experiences.
          </p>
        </div>

        {/* System Configuration Header (Replacing Subjects) */}
        <div className="flex items-center justify-between border-b border-border-primary pb-4 mb-8">
          <span className="text-[10px] font-mono text-stone-500 tracking-widest uppercase">SYSTEM CONFIGURATION</span>
          <span className="text-[10px] font-mono text-stone-500 tracking-widest uppercase">2 MODULES</span>
        </div>

        {/* Feature Grid from image_0.png */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-border-primary rounded bg-black overflow-hidden divide-y md:divide-y-0 md:divide-x divide-border-primary">
          
          {/* Card 1: Core Experience */}
          <div className="p-8 hover:bg-[#050505] transition-colors cursor-pointer group">
            <div className="text-[10px] text-stone-500 mb-6 font-mono tracking-widest uppercase flex justify-between">
              Module 01
              <span className="opacity-0 group-hover:opacity-100 transition-opacity">Active</span>
            </div>
            <h3 className="font-bold text-lg mb-3 font-geist group-hover:text-white text-stone-100 transition-colors">Core Experience</h3>
            <p className="text-stone-400 text-xs leading-relaxed font-mono">
              Base configurations for routing, authentication flows, and primary tenant architecture.
            </p>
            <div className="mt-8 flex items-center justify-between text-[10px] font-mono text-stone-500">
              <span className="group-hover:text-white transition-colors">Configure ↗</span>
            </div>
          </div>

          {/* Card 2: Quick Action (Change Accent Color) */}
          <div 
            onClick={() => setIsModalOpen(true)}
            className="p-8 hover:bg-[#050505] transition-colors cursor-pointer group relative overflow-hidden"
          >
            <div className="text-[10px] text-stone-500 mb-6 font-mono tracking-widest uppercase">Quick Action</div>
            
            <div className="flex items-center gap-4 mb-3">
              <div 
                className="w-10 h-10 rounded bg-[#111] border border-border-primary flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-300"
                style={{ borderColor: isModalOpen ? 'var(--color-accent)' : undefined }}
              >
                <Plus size={18} className="text-stone-300 group-hover:text-white transition-colors" style={{ color: isModalOpen ? 'var(--color-accent)' : undefined }} />
              </div>
              <h3 className="font-bold text-lg font-geist group-hover:text-white text-stone-100 transition-colors">Change Accent Color</h3>
            </div>
            
            <p className="text-stone-400 text-xs leading-relaxed font-mono">
              Update the global primary interaction accent token used throughout the platform UI.
            </p>
            <div className="mt-6 flex items-center justify-between text-[10px] font-mono text-stone-500">
              <span className="group-hover:text-white transition-colors">Open Flyout &rarr;</span>
            </div>
            
            {/* Active state indicator line if modal is open */}
            {isModalOpen && (
              <div className="absolute bottom-0 left-0 w-full h-0.5" style={{ backgroundColor: 'var(--color-accent)' }}></div>
            )}
          </div>
          
          {/* Card 3 (Empty Spacer to maintain 3-col visually) */}
          <div className="p-8 bg-[#020202]">
             {/* Empty slot for future modules */}
             <div className="w-full h-full flex items-center justify-center border border-dashed border-border-primary/50 rounded p-4 opacity-50">
                <span className="text-xs font-mono text-stone-600">Pending Integration</span>
             </div>
          </div>
        </div>
      </main>

      {/* Flyout Modal (mimicking image_2.png AI tutor overlay) */}
      {isModalOpen && (
        <>
          {/* Dark overlay for mobile/focus */}
          <div 
            className="fixed inset-0 bg-black/40 z-40 backdrop-blur-[2px] transition-opacity" 
            onClick={() => setIsModalOpen(false)}
          />
          
          {/* Flyout panel */}
          <div 
            className="fixed right-0 top-0 h-screen w-full md:w-[380px] bg-[#0c0c0c] border-l z-50 flex flex-col transition-transform shadow-2xl animate-in slide-in-from-right duration-300"
            style={{ borderLeftColor: 'var(--color-accent)' }}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-border-primary/50">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: 'var(--color-accent)' }}></div>
                <span className="text-sm font-bold font-geist text-white">Appearance Settings</span>
              </div>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="p-1 text-stone-400 hover:text-white transition-colors bg-[#111] hover:bg-[#222] border border-border-primary rounded"
              >
                <X size={14} />
              </button>
            </div>
            
            {/* Content Area */}
            <div className="p-6 flex-1 overflow-y-auto space-y-8">
              
              <div className="space-y-4">
                <h3 className="text-base font-geist font-semibold text-white">Active Accent Token</h3>
                <p className="text-xs font-mono text-stone-400 leading-relaxed mb-6">
                  Select a variable to inject as the primary <code>--color-accent</code> throughout immediately evaluated CSS layers.
                </p>
                
                {/* Swatches Grid */}
                <div className="grid grid-cols-2 gap-4">
                  {accentOptions.map(option => {
                    const isActive = accentColor === option.hex;
                    return (
                      <button
                        key={option.hex}
                        onClick={() => setAccentColor(option.hex)}
                        className="flex flex-col items-center gap-3 p-4 rounded-lg border bg-[#050505] transition-all hover:bg-[#111]"
                        style={{ 
                          borderColor: isActive ? 'var(--color-accent)' : '#262626',
                        }}
                      >
                        <div 
                          className="w-12 h-12 rounded-md shadow-lg"
                          style={{ 
                            backgroundColor: option.hex,
                            boxShadow: isActive ? `0 0 20px ${option.hex}40` : 'none'
                          }}
                        />
                        <span 
                          className="text-xs font-mono font-medium transition-colors"
                          style={{ color: isActive ? 'white' : '#78716c' }}
                        >
                          {option.name}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
              
              <div className="p-4 border border-border-primary/50 bg-[#050505] rounded-lg">
                <div className="flex items-center gap-3 mb-2">
                  <Settings2 size={14} className="text-stone-500" />
                   <span className="text-[10px] uppercase tracking-widest font-mono text-stone-500">Live Preview</span>
                </div>
                <button 
                  className="w-full py-2.5 rounded text-xs font-bold transition-colors font-geist bg-transparent border border-border-primary"
                  style={{ 
                    color: 'var(--color-accent)', 
                    borderColor: 'var(--color-accent)',
                    backgroundColor: `${accentColor}10` // 10% opacity hex
                  }}
                >
                  Primary Action Button
                </button>
              </div>
            </div>
            
          </div>
        </>
      )}
    </div>
  );
}

export default Admin;
