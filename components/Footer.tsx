import { navItems } from '@/lib/navItems';
import BlogrLogo from './BlogrLogo';

export default function Footer({
  includeAttribution = true,
}: {
  includeAttribution?: boolean;
}) {
  return (
    <footer className='flex flex-col items-center rounded-tr-[90px] bg-neutral-very-dark-blue pb-[80px] pt-[75px] text-center text-white'>
      <BlogrLogo />
      <nav className='mt-20'>
        <ul className='flex flex-col gap-[52px]'>
          {navItems.map((item) => {
            return (
              <li key={item.key}>
                <span>{item.label}</span>
                <ul className='mt-10 space-y-2 text-neutral-grayish-blue'>
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
      </nav>
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
    </footer>
  );
}
