import { styles } from "../styles";
import { EarthCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5 shadow-2xl z-10`}
      >
        <div className="absolute top-[20%] right-[30%]">
          <h1 className={`${styles.heroHeadText} text-white`}>
            Welcome to <span className="text-[#915EFF]">&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Jet Trade FX</span>
          </h1>
          <p className={`${styles.heroSubText} mt-10 text-white-100 z-40`}>
            Advance & smart forex trading platform{" "}
            <br className="sm:block hidden" />
            AI based smart trading apps
          </p>
        </div>
        <div className="h-full w-full absolute left-[20%] -top-[10%]">
          <EarthCanvas />
        </div>
      </div>
    </section>
  );
};

export default Hero;
