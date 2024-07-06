import BlogrLogo from './BlogrLogo';
import DesktopMenu from './DesktopMenu';
import MobileMenu from './MobileMenu';

export default function Header() {
  return (
    <header className='absolute z-20 w-full px-6 py-14'>
      <div className='mx-auto flex max-w-[1110px] items-center justify-between'>
        <BlogrLogo />
        <MobileMenu className='ml-16 lg:hidden' />
        <DesktopMenu className='ml-16 hidden lg:flex' />
      </div>
    </header>
  );
}
