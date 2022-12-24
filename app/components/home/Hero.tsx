import { Vector } from "@/components/index"

const Hero = () => {
    return (
        <div className="hero__content-desktop">
          <section className="hero__section-desktop">
            <div
              className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12"
            >
              <div className="mr-auto place-self-start lg:col-span-2">
                <div className="grid grid-cols-4 gap-x-4 col__hero-vector1">
                  <div className="col-span-12">
                    <Vector name="leaf-one"/>
                  </div>
                  <div className="col-span-6 md:mt-12">
                    <Vector name="leaf-one"/>
                  </div>
                </div>
              </div>
              <div
                className="mr-auto place-items-center items-stretch lg:col-span-5"
              >
                <div className="grid grid-cols-4 gap-x-4 col__hero-context">
                  <div className="col-span-12">
                    <h1
                      className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight text-center md:leading-loose md:text-8xl xl:text-6xl text-gray-700 dark:text-gray-600 align-bottom"
                    >
                      May Allah Bless Us
                    </h1>
                  </div>
                  <div className="col-span-12">
                    <p
                      className="max-w-2xl mb-6 font-light lg:mb-8 md:text-sm lg:text-xl text-gray-700 dark:text-gray-600 place-self-end md:w-10/12 text-justify"
                    >
                      Wahai manusia! Bertakwalah kepada Tuhanmu yang telah
                      menciptakan kamu dari diri yang satu(Adam), dan (Allah)
                      menciptakan pasangannya (Hawa) dari (diri)-nya; dan dari
                      keduanya Allah memperkembangbiakkan laki-laki dan
                      perempuan yang banyak
                    </p>
                  </div>
                  <div className="col-span-6">
                    <h3
                      className="max-w-2xl mb-4 text-2xl font-extrabold tracking-tight text-center leading-none md:text-1xl xl:text-1xl text-gray-700 dark:text-gray-600 align-middle md:w-80 place-self-end"
                    >
                      Surah An-Nisa - Ayat 1
                    </h3>
                  </div>
                  <div className="col-span-6 col__context-vector">
                    <Vector name="leaf-two" width={200} height={200} className={'md:h-20 md:mt-11 md:-ml-12'}/>
                  </div>
                </div>
              </div>
              <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                <div
                  className="relative grid grid-cols-4 gap-x-4 col__hero-vector2"
                >
                  <div className="col-span-3 vector-1">
                    <Vector name="mosque" className={"md:max-h-full"} />
                  </div>
                  <div
                    className="col-span-2 absolute top-0 right-0 md:h-80 w-16 vector-2"
                  >
                    <Vector name="leaf-three" className={"md:h-24"} />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
    )
}

export default Hero