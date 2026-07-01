import { SliderContainer } from "@/components/Slider/SliderContainer";
import { HeroSlide } from "@/components/Slides/01_HeroSlide";
import { AgendaSlide } from "@/components/Slides/02_AgendaSlide";
import { GenesisSlide } from "@/components/Slides/03_GenesisSlide";
import { GrowthTimelineSlide } from "@/components/Slides/04_GrowthTimelineSlide";
import { FinancialSlide } from "@/components/Slides/05_FinancialSlide";
import { ScaleSlide } from "@/components/Slides/06_ScaleSlide";
import { TenderingSlide } from "@/components/Slides/07_TenderingSlide";
import { UAEMapSlide } from "@/components/Slides/08_UAEMapSlide";
import { GuinnessSlide } from "@/components/Slides/08_GuinnessSlide";
import { ProjectsSlide } from "@/components/Slides/09_ProjectsSlide";
import { PMVSlide } from "@/components/Slides/10_PMVSlide";
import { DepartmentsSlide } from "@/components/Slides/11_DepartmentsSlide";
import { HSESlide } from "@/components/Slides/12_HSESlide";
import { InnovationSlide } from "@/components/Slides/13_InnovationSlide";
import { VisionSlide } from "@/components/Slides/14_VisionSlide";
import { ClosingSlide } from "@/components/Slides/15_ClosingSlide";

// Slide index reference:
// 0  Hero       | 1  Agenda      | 2  Genesis    | 3  Growth
// 4  Financials | 5  Scale       | 6  Tendering  | 7  UAE Map
// 8  Guinness   | 9  Projects    | 10 PMV        | 11 Departments
// 12 HSE        | 13 Innovation  | 14 Vision     | 15 Closing

const Index = () => {
  return (
    <SliderContainer>
      {/* 00 */ <HeroSlide />}
      {/* 01 */ <AgendaSlide />}
      {/* 02 */ <GenesisSlide />}
      {/* 03 */ <GrowthTimelineSlide />}
      {/* 04 */ <FinancialSlide />}
      {/* 05 */ <ScaleSlide />}
      {/* 06 */ <TenderingSlide />}
      {/* 07 */ <UAEMapSlide />}
      {/* 08 */ <GuinnessSlide />}
      {/* 09 */ <ProjectsSlide />}
      {/* 10 */ <PMVSlide />}
      {/* 11 */ <DepartmentsSlide />}
      {/* 12 */ <HSESlide />}
      {/* 13 */ <InnovationSlide />}
      {/* 14 */ <VisionSlide />}
      {/* 15 */ <ClosingSlide />}
    </SliderContainer>
  );
};

export default Index;
