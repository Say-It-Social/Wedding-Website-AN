import trav1 from "@/assets/trav1.png";
import trav3 from "@/assets/trav3.png";
import floralDivider from "@/assets/trav4.png";
import cloudDecoration from "@/assets/trav5.png";

const TravelSection = () => {
  return (
    <section className="relative w-full overflow-hidden md:overflow-visible">
      {/* Left cloud in top-left corner - responsive sizing */}
      <div className="pointer-events-none absolute -left-8 top-2 w-24 sm:w-36 md:w-60 lg:w-80 xl:w-96 z-0">
        <img src={trav1} alt="" className="w-full h-auto object-contain" />
      </div>
      {/* Right cloud with passport and leaves in top-right corner - responsive sizing */}
      <div className="pointer-events-none absolute -right-8 top-2 w-28 sm:w-40 md:w-72 lg:w-96 xl:w-[28rem] z-0">
        <img src={trav3} alt="" className="w-full h-auto object-contain" />
      </div>
      
      <div className="mx-auto w-full max-w-5xl px-4 sm:px-6 md:px-8 relative z-10">
        {/* Header: Title centered */}
        <div className="mx-auto w-full relative text-center py-10 md:py-16">
          <h2 className="mx-auto font-quahon text-5xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-8xl text-primary font-medium leading-tight">
            <span className="block">Travel &</span>
            <span className="block">Arrival</span>
          </h2>
        </div>

        {/* Body: centrally aligned text, bigger size to match reference image */}
        <div className="mx-auto max-w-2xl space-y-8 font-along-serif">
          <p className="text-base md:text-xl text-muted-foreground leading-relaxed text-center">
            The nearest airport is <span className="font-semibold text-primary">Udaipur (UDR)</span>.
          </p>
          <p className="text-base md:text-xl text-muted-foreground leading-relaxed text-center">
            If you're travelling by road from Ahmedabad, the drive usually takes around{" "}
            <span className="font-semibold text-primary">4-5 hours</span>, depending on traffic and breaks.
          </p>
          <p className="text-base md:text-xl text-muted-foreground leading-relaxed text-center">
            If you arrive in Udaipur a day earlier, we'd love to begin the
            celebrations together with a relaxed evening in the heart of the
            city, good food, and time to settle in before the days ahead. Please
            let us know if this is part of your plan so we can organise it
            together.
          </p>
          <p className="text-base md:text-xl text-muted-foreground leading-relaxed text-center">
            Once you've booked your flights, please share the details with us,
            and we'll help coordinate travel so everyone arrives comfortably and
            without stress.
          </p>
        </div>

        <div className="flex justify-center py-4 mt-8">
          <img src={floralDivider} alt="" className="w-full max-w-xl md:max-w-2xl h-auto opacity-80" />
        </div>
        <div className="flex justify-center py-4">
          <img src={cloudDecoration} alt="" className="w-48 h-auto opacity-80" />
        </div>
      </div>
    </section>
  );
};

export default TravelSection;
