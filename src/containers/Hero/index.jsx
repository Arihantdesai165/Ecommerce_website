// Hero Section Component
import { Link } from "react-router-dom";
import { HERO_INFO } from "~/constants";
import ManImg from "~assets/man_hero.png";

const Hero = () => {
  const { prev, saleTitle, underTitle, content, description } = HERO_INFO;
  return (
    <section aria-labelledby="hero-title" role="banner"
      className="
                h-[800px] bg-hero 
                bg-no-repeat bg-cover bg-center py-24
                "
    >
      <div className="container mx-auto flex justify-around h-full">
        <div className="flex flex-col justify-center">
          <div className="font-semibold flex items-center uppercase">
            <div aria-hidden="true" className="w-10 h-[2px] bg-red-500 mr-3"></div>
            <span>{prev}</span>
          </div>
          <div className="text-4xl xs:text-5xl sm:text-6xl xl:text-[70px] leading-[1.1] font-light mb-4 uppercase">
            <h1 id="hero-title">{saleTitle}</h1>
            <p>{underTitle}</p>
            <p className="font-semibold">{content}</p>
          </div>
          <Link
            to={"/"}
            className="self-start uppercase font-semibold border-b-2 border-primary"
            aria-label="Discover more products in our autumn sale"
          >
            {description}
          </Link>
        </div>
        <div className="hidden lg:block">
          <img
            className="-mt-[33%] max-h-[920px] max-w-[420px] xl:max-w-none"
            src={ManImg}
            alt="Man in autumn sale fashion"
            fetchpriority="high" loading="eager"
          />
        </div>
      </div>
    </section>
  );
};
export default Hero;
