import Button from '@/components/Button';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { cn } from '@/lib/utils';

export default function Home() {
  return (
    <main className='font-overpass relative overflow-x-hidden text-neutral-very-dark-blue'>
      <Header />
      <section className='bg-pattern-mobile lg:bg-pattern-desktop lg:bg-pattern-desktop-position bg-pattern-mobile-position relative flex flex-col items-center overflow-hidden rounded-bl-[120px] px-10 pb-[155px] pt-[200px] text-center text-white'>
        <div className='relative'>
          <h1 className='text-heading-1 mx-auto mb-6 max-w-[14ch] font-bold lg:max-w-none'>
            A modern publishing platform
          </h1>
          <p>Grow your audience and build your online brand with Blogr.</p>
          <div className='mx-auto mt-12 flex gap-4 lg:max-w-[290px]'>
            <Button className='flex-1 px-4' variant='secondary'>
              Start for Free
            </Button>
            <Button className='flex-1 px-4' variant='outline'>
              Learn More
            </Button>
          </div>
        </div>
      </section>
      <section className='relative mt-[105px] px-10 text-center lg:mx-auto lg:mb-[120px] lg:mt-40 lg:max-w-[1110px] lg:px-0'>
        <h2 className='text-heading-2 font-bold text-primary-dark-blue lg:mb-[114px]'>
          Designed for the future
        </h2>
        <div className='gap-8 lg:flex lg:flex-row-reverse'>
          <div className='mx-auto flex h-full w-full flex-1 shrink-0 lg:mx-0'>
            <figure>
              <img
                className='mt-16 lg:hidden'
                src='./images/illustration-editor-mobile.svg'
              />
              <img
                className='mt-16 hidden lg:absolute lg:-right-[450px] lg:-top-[20%] lg:block lg:scale-90'
                src='./images/illustration-editor-desktop.svg'
              />
            </figure>
          </div>
          <div className='mt-14 flex flex-col gap-14 text-center lg:flex-1 lg:text-left'>
            <section>
              <h3 className='mx-auto mb-8 max-w-[15ch] text-2xl font-bold text-primary-dark-blue lg:mx-0 lg:max-w-none'>
                Introducing an extensible editor
              </h3>
              <p className='text-neutral-dark-grayish-blue'>
                Blogr features an exceedingly intuitive interface which lets you
                focus on one thing: creating content. The editor supports
                management of multiple blogs and allows easy manipulation of
                embeds such as images, videos, and Markdown. Extensibility with
                plugins and themes provide easy ways to add functionality or
                change the looks of a blog.
              </p>
            </section>
            <section>
              <h3 className='mb-8 text-2xl font-bold text-primary-dark-blue'>
                Robust content management
              </h3>
              <p className='text-neutral-dark-grayish-blue'>
                Flexible content management enables users to easily move through
                posts. Increase the usability of your blog by adding customized
                categories, sections, format, or flow. With this functionality,
                you’re in full control.
              </p>
            </section>
          </div>
        </div>
      </section>

      <div className='relative'>
        <figure>
          <img
            src='./images/illustration-phones.svg'
            className='absolute -top-[175px] left-1/2 z-20 w-full max-w-[375px] -translate-x-1/2 xl:left-[15%] xl:top-6 xl:translate-x-0 xl:scale-150'
          />
        </figure>
        <section className='bg-circle-pattern-mobile bg-circle-pattern-mobile-position xl:bg-circle-pattern-desktop-size xl:bg-circle-pattern-desktop-position bg-circle-pattern-mobile-size xl:bg-circle-pattern-desktop relative mt-[275px] overflow-hidden rounded-bl-[90px] rounded-tr-[90px] bg-no-repeat px-8 pb-[120px] pt-[230px] text-center text-white xl:py-[116px] xl:text-left'>
          <div className='relative mx-auto max-w-[1110px] xl:grid xl:grid-cols-2 xl:gap-6'>
            <div className='xl:col-start-2'>
              <h2 className='mb-7 text-3xl font-bold xl:mb-8'>
                State of the Art Infrastructure
              </h2>
              <p className='font-ubuntu font-thin'>
                With reliability and speed in mind, worldwide data centers
                provide the backbone for ultra-fast connectivity. This ensures
                your site will load instantly, no matter where your readers are,
                keeping your site competitive.
              </p>
            </div>
          </div>
        </section>
      </div>

      <div className='relative mx-auto max-w-[1110px] lg:my-[310px] lg:flex lg:gap-8'>
        <div className='mx-auto flex h-full w-full flex-1 shrink-0 lg:mx-0'>
          <figure>
            <img
              className='mt-16 lg:hidden'
              src='./images/illustration-laptop-mobile.svg'
            />
            <img
              className='mt-16 hidden lg:absolute lg:-left-[500px] lg:-top-[50%] lg:block'
              src='./images/illustration-laptop-desktop.svg'
            />
          </figure>
        </div>
        <div className='mt-20 text-center lg:mt-0 lg:flex-1 lg:text-left'>
          <section className='px-10'>
            <h3 className='mb-8 text-2xl font-bold text-primary-dark-blue'>
              Free, open, simple
            </h3>
            <p className='text-neutral-dark-grayish-blue'>
              Blogr is a free and open source application backed by a large
              community of helpful developers. It supports features such as code
              syntax highlighting, RSS feeds, social media integration,
              third-party commenting tools, and works seamlessly with Google
              Analytics. The architecture is clean and is relatively easy to
              learn.
            </p>
          </section>
          <section className='mb-[100px] mt-20 px-10'>
            <h3 className='mb-8 text-2xl font-bold text-primary-dark-blue'>
              Powerful tooling
            </h3>
            <p className='text-neutral-dark-grayish-blue'>
              Batteries included. We built a simple and straightforward CLI tool
              that makes customization and deployment a breeze, but capable of
              producing even the most complicated sites.
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </main>
  );
}
