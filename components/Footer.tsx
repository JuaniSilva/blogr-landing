import { navItems } from '@/lib/navItems';
import BlogrLogo from './BlogrLogo';

export default function Footer({
  includeAttribution = true,
}: {
  includeAttribution?: boolean;
}) {
  return (
    <footer className='flex flex-col items-center rounded-tr-[90px] bg-neutral-very-dark-blue pb-[80px] pt-[75px] text-center text-white lg:pb-[75px] lg:pt-16 lg:text-left'>
      <div className='w-full max-w-[1110px]'>
        <nav className='mt-20 w-full lg:mt-0'>
          <ul className='flex flex-col items-center gap-[52px] lg:w-full lg:flex-row lg:items-start lg:justify-between lg:gap-0'>
            <li className='mb-20 lg:flex-1'>
              <a href='#'>
                <BlogrLogo />
              </a>
            </li>
            {navItems.map((item) => {
              return (
                <li key={item.key} className='lg:flex-1'>
                  <span>{item.label}</span>
                  <ul className='mt-10 space-y-2 text-neutral-grayish-blue'>
                    {item.subItems.map((subItem) => (
                      <li key={subItem.key} className='hover:underline'>
                        <a href={subItem.to}>{subItem.label}</a>
                      </li>
                    ))}
                  </ul>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
      {includeAttribution && (
        <div className='mt-10 text-center text-[11px]'>
          Coded by{' '}
          <a
            href='https://github.com/JuaniSilva'
            className='text-primary-light-red'
          >
            Juani Silva
          </a>
          .
        </div>
      )}
    </footer>
  );
}
