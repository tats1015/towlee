/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  onNavClick: (sectonId: string) => void;
}

export default function Header({ onNavClick }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Philosophy', id: 'philosophy' },
    { label: 'Services', id: 'services' },
    { label: 'Cases', id: 'cases' },
    { label: 'About', id: 'about' },
  ];

  return (
    <header
      id="site-header"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled || isOpen
          ? 'bg-brand-bg/98 backdrop-blur-lg border-b border-brand-text-primary/10 py-4 shadow-xl'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* LOGO */}
        <div 
          onClick={() => onNavClick('hero')} 
          className="cursor-pointer group flex flex-col"
          id="logo-brand"
        >
          <span className="font-serif-en text-xl md:text-2xl tracking-[0.25em] text-brand-text-primary uppercase transition-colors group-hover:text-brand-gold">
            Towlee
          </span>
        </div>

        {/* Desktop Navbar */}
        <nav className="hidden md:flex items-center space-x-10" id="desktop-nav">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onNavClick(item.id)}
              className="text-xs tracking-[0.2em] uppercase text-brand-text-primary hover:text-brand-gold transition-colors duration-300 font-medium cursor-pointer"
              id={`nav-${item.id}`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-brand-text-primary hover:text-brand-gold transition-colors"
          aria-label="Toggle Menu"
          id="mobile-menu-btn"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <div
        id="mobile-dropdown"
        className={`absolute top-full left-0 w-full bg-brand-bg/98 backdrop-blur-lg z-40 transition-all duration-500 overflow-hidden ${
          isOpen ? 'opacity-100 max-h-[400px] border-b border-brand-text-primary/10 shadow-2xl' : 'opacity-0 max-h-0'
        }`}
      >
        <div className="flex flex-col space-y-6 px-8 py-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setIsOpen(false);
                onNavClick(item.id);
              }}
              className="text-left font-serif-jp text-lg tracking-wider text-brand-text-primary hover:text-brand-gold transition-colors"
              id={`mobile-nav-${item.id}`}
            >
              {item.label} <span className="text-xs font-serif-en text-brand-text-secondary block mt-1">{item.id.toUpperCase()}</span>
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}
