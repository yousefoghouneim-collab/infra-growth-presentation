import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import innovoDarkLogo from "@/assets/innovo-infra-dark-logo.png";
import slateCircles from "@/assets/circles-slate.png";
import whiteCircles from "@/assets/white-circles.png";

interface SlideLayoutProps {
  children: ReactNode;
  className?: string;
  background?: "white" | "aqua";
  showCircles?: boolean;
  showLogo?: boolean;
  isHeroSlide?: boolean;
  style?: React.CSSProperties;
}

export const SlideLayout = ({
  children,
  className = "",
  background = "white",
  showCircles = true,
  showLogo = true,
  isHeroSlide = false,
  style,
}: SlideLayoutProps) => {
  const bgClass = background === "aqua" ? "bg-gradient-aqua" : "bg-white";
  const circleImage = background === "aqua" ? whiteCircles : slateCircles;

  const logoSrc = innovoDarkLogo;
  const logoFilter = "none";

  return (
    <div
      className={cn("relative w-full h-full overflow-hidden", bgClass, className)}
      style={style}
    >
      {/* Decorative circles */}
      {showCircles && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <img
            src={circleImage}
            alt=""
            className="absolute right-[-5%] top-1/2 -translate-y-1/2 w-[40%] h-auto"
            style={{ opacity: 0.07 }}
          />
        </div>
      )}

      {/* Logo — white on aqua, slate on white */}
      {showLogo && (
        <div className="absolute top-4 left-5 md:top-5 md:left-7 z-20">
          <img
            src={logoSrc}
            alt="Innovo Infra"
            className={cn(
              "w-auto object-contain",
              isHeroSlide
                ? "h-20 md:h-24"
                : "h-16 md:h-20"
            )}
            style={{ filter: logoFilter }}
          />
        </div>
      )}

      {/* Main content */}
      <div
        className={cn(
          "relative z-10 w-full h-full flex flex-col items-center justify-center",
          isHeroSlide ? "px-8 py-8" : "px-6 py-20 md:px-10 md:py-24"
        )}
      >
        {children}
      </div>
    </div>
  );
};
