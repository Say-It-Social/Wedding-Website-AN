import backgroundMobile from '@/assets/background-3.jpeg';
import { useLocation } from 'react-router-dom';

const WeddingFooter = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const isRSVPPage = location.pathname === '/rsvp';
  const showMessage = isHomePage || isRSVPPage;

  return (
    <>
      <style>{`
        .footer-mobile-bg {
          background-image: url(${backgroundMobile});
          background-repeat: no-repeat;
          background-size: cover;
          background-position: center;
        }
        @media (min-width: 768px) {
          .footer-mobile-bg {
            background-image: none;
          }
        }
      `}</style>

      {/* FULL WIDTH FOOTER */}
      <footer className="footer-mobile-bg w-full py-12 px-4 md:px-8">
        
        {/* INNER CONTAINER – CONTROLS CONTENT WIDTH */}
        <div className="max-w-6xl mx-auto flex flex-col items-center">
          {showMessage && (
            <p className="font-lora text-sm md:text-base text-primary text-center mb-8 italic">
              We can't wait to celebrate, laugh, and create memories together as part of this festival.
            </p>
          )}
        </div>
      </footer>
    </>
  );
};

export default WeddingFooter;
