import Image from 'next/image';
import StatsSection from './state-section';

export default function HowItWorks() {
  return (
    <section
      id="how-it-work"
      className="relativ py-10 sm:py-16 lg:py-24 "
    >
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold  md:text-6xl lg:text-5xl">
            How does it work?
          </h2>
          <p className="max-w-2xl mx-auto mt-4 text-base leading-relaxed  md:text-2xl">
            Our AI tools help you detect content issues and plagiarism quickly and accurately.
          </p>
        </div>

        <div className="relative mt-12 lg:mt-20">
          {/* Curved line (only for medium and up screens) */}
          <div className="absolute inset-x-0 top-2 hidden md:block md:px-20 lg:px-28 xl:px-44">
            <Image
              src="https://cdn.rareblocks.xyz/collection/celebration/images/steps/2/curved-dotted-line.svg"
              alt="Step connector line"
              width={1000}
              height={500}
              className="w-full"
              priority
            />
          </div>

          {/* Steps */}
          <div className="relative grid grid-cols-1 gap-y-12 text-center md:grid-cols-3 gap-x-12">
            {[
              {
                step: '1',
                title: 'Select Template',
                desc: 'Choose a template that suits your content analysis needs.',
              },
              {
                step: '2',
                title: 'Enter Your Details',
                desc: 'Paste your content — our AI will scan and evaluate it instantly.',
              },
              {
                step: '3',
                title: 'Publish It',
                desc: 'Use the results in your blog, website, or academic work.',
              },
            ].map(({ step, title, desc }) => (
              <div key={step}>
                <div className="flex items-center justify-center w-16 h-16 mx-auto border-2 border-gray-200 rounded-full shadow dark:bg-gray-800 dark:border-gray-600">
                  <span className="text-xl font-semibold ">
                    {step}
                  </span>
                </div>
                <h3 className="mt-6 text-xl font-semibold leading-tight md:mt-10">
                  {title}
                </h3>
                <p className="mt-4 text-base dark:text-gray-400 text-gray-600 md:text-lg">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Gradient background blur */}
      <div
        className="absolute inset-0 m-auto max-w-xs h-[357px] blur-[118px] sm:max-w-md md:max-w-lg"
        style={{
          background:
            'radial-gradient(1.89deg, rgba(34, 78, 95, 0.4) -1000%, rgba(191, 227, 205, 0.26) 1500.74%, rgba(34, 140, 165, 0.41) 56.49%, rgba(28, 47, 99, 0.11) 1150.91%)',
        }}
      />
      {/* <StatsSection/> */}
    </section>
  );
}
