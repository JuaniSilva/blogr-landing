import BlogrLogo from './BlogrLogo';
import MobileMenu from './MobileMenu';

export default function Header() {
  return (
    <header className='absolute z-20 w-full px-6 py-14'>
      <div className='flex items-center justify-between'>
        <BlogrLogo />
        <MobileMenu />
      </div>
    </header>
  );
}
