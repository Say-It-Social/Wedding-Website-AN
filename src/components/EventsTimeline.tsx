import React from 'react';

import blessings from '@/assets/icon3.png';
import icon1 from '@/assets/icon_1.png';
import sangeetIcon from '@/assets/icon2.png';
import haldiIcon from '@/assets/icon4.png';
import weddingIcon from '@/assets/icon5.png';
import poolpartyIcon from '@/assets/icon6.png';
import finaleIcon from '@/assets/icon7.png';
import background3 from '@/assets/background-3.jpeg';

interface EventItemProps {
  title: string;
  date: string;
  time: string;
 description: React.ReactNode | (string | React.ReactNode)[];
  icon?: string;
  isLast?: boolean;
  index: number;
}

const EventItem = ({
  title,
  date,
  time,
  description,
  icon,
  isLast = false,
}: EventItemProps) => {
  return (
    <div className="relative py-12 md:py-16">
      {/* HORIZONTAL LINE */}
      {!isLast && (
        <span className="absolute left-0 right-0 bottom-0 h-[0.5px] bg-[#C5A059]/60" />
      )}

      <div
        className="
          relative mx-auto max-w-5xl
          grid grid-cols-[120px_18px_minmax(0,1fr)]
          sm:grid-cols-[150px_22px_minmax(0,1fr)]
          md:grid-cols-[1fr_40px_1fr]
          items-stretch
          md:-translate-x-28
        "
      >
        {/* LEFT — TITLE (mobile: centered with icon below; desktop: title only, right-aligned) */}
        <div className="w-full flex flex-col items-center justify-center text-center pl-2 pr-2 md:pl-0 md:pr-3 md:items-end md:text-right md:pr-6">
          <h3 className="font-cormorant text-xl md:text-4xl text-primary italic font-semibold leading-tight">
            {title.split(' & ').map((part, i) => (
              <React.Fragment key={i}>
                {i > 0 && (
                  <span className="block text-2xl md:text-3xl my-1">&</span>
                )}
                {part}
              </React.Fragment>
            ))}
          </h3>
          {/* ICON — on mobile only: below title in first column */}
          {icon && (
            <div className="mt-3 md:hidden flex-shrink-0">
              <div className="w-10 h-10">
                <img
                  src={icon}
                  alt=""
                  className="w-full h-full object-contain opacity-90"
                />
              </div>
            </div>
          )}
        </div>

        {/* CENTER — VERTICAL LINE (FIXED) */}
        <div className="relative flex justify-center self-stretch">
          <span className="absolute inset-y-0 w-px bg-[#C5A059]/70" />
        </div>

        {/* RIGHT — CONTENT (date, time, description; icon only on desktop) */}
        <div className="flex gap-4 md:gap-6 items-start pl-4 md:pl-6">
          <div className="flex-grow min-w-0 md:max-w-lg">
            <p className="font-lora text-xs md:text-xs font-bold text-primary uppercase tracking-[0.25em] mb-1">
              {date}
            </p>
            <p className="font-lora text-xs md:text-xs font-bold text-primary uppercase tracking-widest mb-3">
              {time}
            </p>

           <div className="font-lora text-sm md:text-sm text-primary leading-relaxed space-y-2">
  {Array.isArray(description)
    ? description.map((item, i) => <p key={i}>{item}</p>)
    : description}
</div>


          </div>

          {/* ICON — desktop only: in third column */}
          {icon && (
            <div className="hidden md:block flex-shrink-0 pt-1">
              <div className="w-10 h-10 md:w-28 md:h-28">
                <img
                  src={icon}
                  alt=""
                  className="w-full h-full object-contain opacity-90"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};



const EventsTimeline = () => {
   const events = [
    {
      title: 'The Royal Arrival',
      date: 'MONDAY, OCTOBER 26, 2026',
      time: '12 PM ONWARDS',
      
      description: [
    'Arrivals and Check-in',
    'Take your time, unpack, catch up with familiar faces and ease into the days ahead.',
    'There might be a cold cocktail waiting for you, who knows.',
  ],
      icon: icon1,
    },
    {
      title: 'Rhythm & Riwaaz',
      date: 'MONDAY, OCTOBER 26, 2026',
      time: '6 PM ONWARDS',
      description:
        ['Our Sangeet and Mehndi will start in the early evening and flow late into the night with henna, music, dancing and plenty of time together.',
          'This is where the celebration truly begins.',
          "We can't wait to dance with you."
        ],
      icon: sangeetIcon,
    },
    {
      title: 'Blessings & Prayers',
      date: 'TUESDAY, OCTOBER 27, 2026',
      time: '8 AM',
      description:
        ['A Ganesh Pooja and blessing ceremony to begin the wedding day with intention, gratitude and grace.',
          'Your prayers and good wishes mean the world to us.'
        ],
      icon: blessings,
    },
    {
      title: 'Haldi Hues',
      date: 'TUESDAY, OCTOBER 27, 2026',
      time: '11 AM ONWARDS',
      description:
        ["A joyful Haldi ceremony filled with colour, laughter, tradition and very likely a bit of mess.",
          "Wear something you won't be too attached to."
        ],
      icon: haldiIcon,
    },
    {
      title: 'The Wedding',
      date: 'TUESDAY, OCTOBER 27, 2026',
      time: '4 PM ONWARDS',
      description: (
        <>
          <p className="font-bold text-primary">Jaan Entrance | 4:00 PM</p>
          <p className="mb-2">The groom’s arrival filled with music and energy.</p>
          <p>Please join in and celebrate with us.</p>
          <p className="font-bold text-primary">Wedding Ceremony | 5:30 PM - 7:00 PM</p>
          <p>As the sun begins to set, Aditi will make her entrance and the ceremony will unfold surrounded by family, tradition and love.</p>
          <p>Your presence and blessings complete the moment for us.</p>
        </>
       
      ),
      icon: weddingIcon,
    },
    {
      title: 'Poolside Mela',
      date: 'WEDNESDAY, OCTOBER 28, 2026',
      time: '11 AM ONWARDS',
      description:
        ["This is not a wind down, it's the warm up. A high energy daytime celebration with music, colour and just enough chaos to set the tone for the final night. Pace yourselves, the best is yet to come."],
          
      icon: poolpartyIcon,
    },
    {
      title: 'The Grand Finale',
      date: 'WEDNESDAY, OCTOBER 28, 2026',
      time: '7 PM ONWARDS',
      description:
        ['Dinner, music, dancing and one last night together.'],
      icon: finaleIcon,
    },
  ];

  return (
      <section
  className="w-full py-16 -mt-20 md:-mt-20"

      style={{
        backgroundImage: `url(${background3})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-10">
        {events.map((event, index) => (
          <EventItem
            key={index}
            index={index}
            {...event}
            isLast={index === events.length - 1}
          />
        ))}
      </div>
    </section>
  );
};

export default EventsTimeline;
