'use client';
import { useState } from 'react';
import HamburguerIcon from './HamburguerIcon';
import CloseIcon from './CloseIcon';
import Button from './Button';
import { navItems } from '@/lib/navItems';
import ArrowIcon from './ArrowIcon';
import { cn } from '@/lib/utils';

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState<string | null>(null);

  function toggleMenu(key: string) {
    setSelectedMenu((val) => (val === key ? null : key));
  }

  return (
    <div>
      <button onClick={() => setIsOpen((val) => !val)}>
        {isOpen ? <CloseIcon /> : <HamburguerIcon />}
      </button>
      <div
        className={`${isOpen ? 'translate-y-0' : ''} absolute left-1/2 top-[125px] z-50 flex w-[90%] -translate-x-1/2 -translate-y-[200%] flex-col gap-4 rounded bg-white px-6 py-8 text-center font-bold text-primary-dark-blue shadow transition-all duration-500 ease-in-out`}
      >
        <ul className='space-y-5'>
          {navItems.map((item) => {
            return (
              <li key={item.key}>
                <span
                  className={cn(
                    'inline-flex cursor-pointer items-center gap-2 transition-colors',
                    selectedMenu === item.key && 'text-nav-menu-text'
                  )}
                  onClick={() => toggleMenu(item.key)}
                >
                  {item.label}
                  <ArrowIcon
                    className={cn(
                      'transition-all',
                      selectedMenu === item.key ? 'rotate-180' : 'rotate-0'
                    )}
                  />
                </span>
                <ul
                  className={cn(
                    'bg-nav-menu text-nav-menu-text mt-6 hidden w-full space-y-4 rounded py-7',
                    selectedMenu === item.key && 'block'
                  )}
                >
                  {item.subItems.map((subItem) => (
                    <li key={subItem.key}>
                      <a href={subItem.to}>{subItem.label}</a>
                    </li>
                  ))}
                </ul>
              </li>
            );
          })}
        </ul>
        <span className='h-px w-full shrink-0 bg-neutral-grayish-blue'></span>
        <div className='flex flex-col gap-4'>
          <Button className='mx-auto' variant='ghost'>
            Login
          </Button>
          <Button className='mx-auto'>Sign Up</Button>
        </div>
      </div>
    </div>
  );
}