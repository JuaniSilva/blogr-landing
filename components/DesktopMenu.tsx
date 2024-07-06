import Button from './Button';
import { navItems } from '@/lib/navItems';
import { cn } from '@/lib/utils';

export default function DesktopMenu({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        'static left-0 top-0 w-full translate-x-0 translate-y-0 flex-row justify-between bg-transparent font-bold text-white shadow-none',
        className
      )}
    >
      <ul className='flex items-center space-x-4'>
        {navItems.map((item) => (
          <li
            key={item.key}
            className={cn(
              'group relative',
              'relative inline-flex cursor-pointer items-center gap-2 transition-colors hover:underline'
            )}
          >
            {item.label}
            <img
              src='/images/icon-arrow-light.svg'
              className={cn('block transition-all', 'group-hover:rotate-180')}
            />

            <div
              className={cn(
                'absolute left-2/3 top-4 grid w-40 -translate-x-1/2 grid-rows-[0fr] rounded bg-nav-menu px-6 text-left text-nav-menu-text transition-all duration-200',
                'group-hover:mt-6 group-hover:grid group-hover:grid-rows-[1fr] group-hover:py-8'
              )}
            >
              <ul className='space-y-4 overflow-hidden'>
                {item.subItems.map((subItem) => (
                  <li
                    key={subItem.key}
                    className='hover:font-bold hover:text-neutral-very-dark-blue'
                  >
                    <a href={subItem.to}>{subItem.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
      <div className='flex w-fit flex-row gap-4'>
        <Button className='mx-auto' variant='ghost'>
          Login
        </Button>
        <Button className='mx-auto' variant='secondary'>
          Sign Up
        </Button>
      </div>
    </div>
  );
}
