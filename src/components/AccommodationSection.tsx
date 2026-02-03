import venueImage from "@/assets/acc2.png";
import decorativeFlourish from "@/assets/acc3.png";
import { Sparkles } from "lucide-react";

const AccommodationSection = () => {
  return (
    <section className="section-container">
      {/* Header — original image title */}
      <div className="text-center mb-10 -mt-6 md:mt-0">
        <h2 className="mx-auto font-quahon text-5xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-8xl text-primary font-medium leading-tight">
          Accommodation
        </h2>
      </div>

      {/* Venue Card */}
      <div className="max-w-3xl mx-auto">
        {/* Venue Details */}
         <div className="text-center mt-8 space-y-4">
          <p className="font-serif text-sm md:text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
            All of our wedding celebrations will take place at the wedding
            hotel, and we'd love for everyone to stay with us.
          </p>
          <p className="font-serif text-sm md:text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
            The hotel has been beautifully refurbished and offers a calm,
            welcoming space to spend these days together. Waking up knowing
            everyone is close by makes the experience feel easier, warmer, and
            more special.
          </p>
          <p className="font-serif text-sm md:text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
           Guests will need to book and pay for their own rooms. We've arranged locked-in room rates exclusively for our guests, and a booking link with full details will be shared closer to the date.
          </p>
          <p className="font-serif text-sm md:text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
            All food and drinks during the wedding events will be taken care of by us; breakfast too.
          </p>
        </div>

        {/* Map Section */}
        <div className="mt-16 bg-gradient-to-br from-rose-200 via-pink-100 to-rose-200 rounded-3xl p-6 md:p-12 shadow-lg">
          <div className="relative rounded-2xl overflow-hidden shadow-xl">
            <img
              src={venueImage}
              alt="Royal Retreat, Udaipur"
              className="w-full h-auto object-cover"
            />
          </div>
          {/* Venue Header */}
          <div className="text-center mb-8">
            <p className="text-xs md:text-sm uppercase tracking-widest text-amber-900/60 mb-4 font-serif relative top-2">
              VENUE
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-3 mb-6">
              <a href="https://royalretreatudaipur.in/" target="_blank" rel="noopener noreferrer" className="bg-amber-900 text-white px-6 py-3 rounded-lg flex items-center gap-2 whitespace-nowrap hover:bg-amber-800 transition-colors cursor-pointer">
                <span className="font-serif text-base md:text-xl">
                  Royal Retreat, Udaipur
                </span>
                <Sparkles className="w-5 h-5 flex-shrink-0" />
              </a>
            </div>
            <p className="font-serif text-xs md:text-sm text-amber-900/80 max-w-2xl mx-auto">
              Village-Hawala, Badi Hawala Rd, Udaipur, Bari, Rajasthan 313011
            </p>
          </div>

          {/* Embedded Map */}
          <div className="rounded-2xl overflow-hidden shadow-md mb-6 bg-green-100">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3571.456789!2d73.6435781!3d24.6067543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3967ef80148fc5a1%3A0xbcb7e191d0c5ddf1!2sThe%20Royal%20Retreat%20Resort%20%26%20Spa!5e0!3m2!1sen!2sin!4v1706614400000"
              width="100%"
              height="280"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
            />
          </div>

          {/* Additional Info */}
          <div className="text-center">
            <p className="font-serif text-xs md:text-sm text-amber-900/80 leading-relaxed">
              Also, if you would like to stay at the hotel before and after the wedding, please
              do tell us and we can sort this out for you too.
            </p>
          </div>
        </div>

        {/* Decorative Flourish */}
        <div className="flex justify-center mt-12">
          <img
            src={decorativeFlourish}
            alt=""
            className="w-64 h-auto opacity-60"
          />
        </div>
      </div>
    </section>
  );
};

export default AccommodationSection;
