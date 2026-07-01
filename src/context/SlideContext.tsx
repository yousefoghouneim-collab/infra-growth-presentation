import { createContext, useContext } from "react";

interface SlideContextType {
  goTo: (index: number) => void;
  currentSlide: number;
}

export const SlideContext = createContext<SlideContextType>({
  goTo: () => {},
  currentSlide: 0,
});

export const useSlide = () => useContext(SlideContext);
