import { Link, useLocation } from 'react-router-dom';
import logo from '@/assets/logo.png';
import { cn } from '@/lib/utils';
import CountdownTimer from '@/components/CountdownTimer';

interface WeddingHeaderProps {
  showNav?: boolean;
  activeNav?: string;
  useTopLogo?: boolean;
  containerClassName?: string;
  logoContainerClassName?: string;
  navClassName?: string;
}

const WeddingHeader = ({
  showNav = true,
  activeNav = 'Home',
  useTopLogo = false,
  containerClassName,
  logoContainerClassName,
  navClassName,
}: WeddingHeaderProps) => {
  const displayLogo = logo;
  const location = useLocation();

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Travel & Arrival', path: '/travel-arrival' },
    { label: 'Accommodation', path: '/accommodation' },
    { label: 'RSVP', path: '/rsvp' },
    { label: 'Dress Code', path: '/dress-code' },
    { label: 'Explore India', path: '/experience-india' },
    { label: 'FAQs', path: '/faqs' },
  ];

  const isHomePage = location.pathname === '/';

  return (
    <header
      className={cn(
        "flex flex-col items-center pt-6 md:pt-[50vh] pb-8 transition-all duration-1000",
        containerClassName
      )}
    >
      {/* Logo Container */}
      <div
        className={cn(
          `
          w-32 md:w-56 lg:w-64 
          mb-8 md:mb-10 
          transform 
          translate-y-2 md:-translate-y-28 
          transition-transform duration-700 
          md:mt-10 
          ${useTopLogo ? "-mt-4 tab:mt-2" : "md:mt-36 relative md:top-28"}
          `,
          logoContainerClassName
        )}
      >
        <img
          src={displayLogo}
          alt="Aditi & Nikhil"
          className="w-full h-auto object-contain drop-shadow-sm md:drop-shadow-none"
        />
      </div>

      {/* Countdown (Home only — replaces date line) */}
      {isHomePage && <CountdownTimer />}

      {/* Navigation */}
      {showNav && (
        <nav
  className={cn(
    "mt-4 tab:mt-16 lg:mt-6 w-full flex flex-row items-start justify-between md:justify-center px-2 md:px-12 overflow-x-hidden md:overflow-x-visible",
    navClassName
  )}
>
  {navItems.map((item, index) => (
    <span key={item.label} className="flex items-start justify-center md:flex-none">
      <Link
        to={item.path}
        className={cn(
          "nav-link transition-all duration-300",
          item.label === "FAQs" ? "normal-case" : "uppercase",
          "flex items-center justify-center w-full text-center text-[10px] leading-[1.2] tracking-[0.05em] px-0.5 py-2 hover:no-underline md:block md:w-auto md:text-base md:tracking-[0.2em] md:px-0 md:py-0",
          activeNav === item.label
            ? "font-semibold text-burgundy md:border-b-2 md:border-burgundy md:pb-2"
            : " hover:text-burgundy md:border-b-2 md:border-transparent md:pb-2"
        )}
      >
        <span className="md:hidden">
          {item.label === "Travel & Arrival" ? (
            "Travel"
          ) : item.label === "Accommodation" ? (
            "Stay"
          ) : item.label === "Dress Code" ? (
            <span className="leading-[1.1]">
              Dress<br />
              Code
            </span>
          ) : item.label === "Experience India" ? (
            <>Explore<br />India</>
          ) : (
            item.label
          )}
        </span>
        <span className="hidden md:inline whitespace-nowrap">{item.label}</span>
      </Link>

      {index < navItems.length - 1 && (
        <span className="hidden md:inline text-gray-200 mx-2 md:mx-6 lg:mx-10 font-extralight">
          |
        </span>
      )}
    </span>
  ))}
</nav>

      )}
    </header>
  );
};

export default WeddingHeader;
