import BgPatternCircles from '@/components/BgPatternCircles';
import BgPatternMobile from '@/components/BgPatternMobile';
import BlogrLogo from '@/components/BlogrLogo';
import Button from '@/components/Button';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import IllustrationEditorMobile from '@/components/IllustrationEditorMobile';

export default function Home() {
  return (
    <main className='font-overpass relative text-neutral-very-dark-blue'>
      <Header />
      <section className='relative overflow-hidden rounded-bl-[120px] bg-gradient-to-b from-gradient-light-red to-gradient-red px-10 pb-[155px] pt-[200px] text-center text-white'>
        <BgPatternMobile className='absolute -left-[325px] -top-[300px] -z-0' />
        <div className='relative'>
          <h2 className='mb-6 text-3xl font-bold'>
            A modern
            <br />
            publishing platform
          </h2>
          <p>Grow your audience and build your online brand with Blogr.</p>
          <div className='mt-12 flex gap-4'>
            <Button className='flex-1 px-4' variant='secondary'>
              Start for Free
            </Button>
            <Button className='flex-1 px-4' variant='outline'>
              Learn More
            </Button>
          </div>
        </div>
      </section>
      <section className='mt-[105px] px-10 text-center'>
        <h3 className='text-2xl font-bold'>Designed for the future</h3>
        <img className='mt-12' src='./images/illustration-editor-mobile.svg' />
      </section>
      <section className='mt-14 px-10 text-center'>
        <h3 className='mb-8 text-2xl font-bold'>
          Introducing an <br /> extensible editor
        </h3>
        <p>
          Blogr features an exceedingly intuitive interface which lets you focus
          on one thing: creating content. The editor supports management of
          multiple blogs and allows easy manipulation of embeds such as images,
          videos, and Markdown. Extensibility with plugins and themes provide
          easy ways to add functionality or change the looks of a blog.
        </p>
      </section>
      <section className='mt-14 px-10 text-center'>
        <h3 className='mb-8 text-2xl font-bold'>Robust content management</h3>
        <p>
          Flexible content management enables users to easily move through
          posts. Increase the usability of your blog by adding customized
          categories, sections, format, or flow. With this functionality, you’re
          in full control.
        </p>
      </section>
      <div className='relative'>
        <img
          className='absolute -top-[225px] left-1/2 z-20 mt-12 -translate-x-1/2'
          src='./images/illustration-phones.svg'
        />
        <section className='relative mt-[275px] overflow-hidden rounded-bl-[90px] rounded-tr-[90px] bg-gradient-to-b from-gradient-dark-blue to-gradient-very-dark-blue px-8 pb-[120px] pt-[230px] text-center text-white'>
          <img
            src='./images/bg-pattern-circles.svg'
            className='absolute -top-[125px] left-1/2 -z-0 -translate-x-1/2 scale-[157%]'
          />
          <div className='relative'>
            <h2 className='mb-6 text-3xl font-bold'>
              State of the Art Infrastructure
            </h2>
            <p>
              With reliability and speed in mind, worldwide data centers provide
              the backbone for ultra-fast connectivity. This ensures your site
              will load instantly, no matter where your readers are, keeping
              your site competitive.
            </p>
          </div>
        </section>
      </div>
      <section className='mt-20 px-10 text-center'>
        <h3 className='mb-8 text-2xl font-bold'>Free, open, simple</h3>
        <p>
          Blogr is a free and open source application backed by a large
          community of helpful developers. It supports features such as code
          syntax highlighting, RSS feeds, social media integration, third-party
          commenting tools, and works seamlessly with Google Analytics. The
          architecture is clean and is relatively easy to learn.
        </p>
      </section>
      <section className='mb-[100px] mt-20 px-10 text-center'>
        <h3 className='mb-8 text-2xl font-bold'>Powerful tooling</h3>
        <p>
          Batteries included. We built a simple and straightforward CLI tool
          that makes customization and deployment a breeze, but capable of
          producing even the most complicated sites.
        </p>
      </section>
      <Footer />
    </main>
  );
}
