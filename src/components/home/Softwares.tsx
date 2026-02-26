import BlurFade from '../magicui/blur-fade';
import { BackgroundBeams } from '../ui/background-beams';
import { EvervaultCard, Icon } from "../ui/evervault-card";

export function Softwares() {
  return (
    <div>
      <BlurFade delay={0.25} inView className="max-w-[100rem] mx-auto px-8 py-16 relative z-50">
      <h2 className='text-xl lg:text-4xl font-semibold py-4 text-left'>Softwares we provide</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 min-w-[20rem]">
        {software.map((item, index) => (
          <div
            key={index}
            className="border border-white/[0.2] flex flex-col items-start p-4 relative h-[6rem] sm:h-[8rem] md:h-[10rem] lg:h-[13rem] cursor-pointer"
          >
            <Icon className="absolute h-6 w-6 -top-3 -left-3 text-white" />
            <Icon className="absolute h-6 w-6 -bottom-3 -left-3 text-white" />
            <Icon className="absolute h-6 w-6 -top-3 -right-3 text-white" />
            <Icon className="absolute h-6 w-6 -bottom-3 -right-3 text-white" />
            <EvervaultCard text={item.title} />
          </div>
        ))}
      </div>
      </BlurFade>
      <BackgroundBeams />
    </div>
  );
}

export const software = [
  {
    title: "Freight Management",
  },
  {
    title: "HRM",
  },
  {
    title: "Accounting",
  },
  {
    title: "Event MGT",
  },
  {
    title: "Site Engineer Remote MGT",
  },
  {
    title: "Tele Medicine",
  },
  {
    title: "Fixed Asset MGT",
  },
  {
    title: "Provident Fund MGT",
  },
  {
    title: "Hospital MGT",
  },
  {
    title: "CRM",
  },
  {
    title: "VAT MGT",
  },
  {
    title: "Income Tax Return MGT",
  },
];
