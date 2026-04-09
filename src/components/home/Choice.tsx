import { cn } from "@/lib/utils";
import {
  IconAdjustmentsBolt,
  IconCloud,
  IconCurrencyDollar,
  IconEaseInOut,
  IconHeart,
  IconHelp,
  IconRouteAltLeft,
  IconTerminal2,
} from "@tabler/icons-react";

export function Choice() {
  const features = [
    {
      title: "Engineered Expertise",
      description:
        "Solutions architected by experienced engineers to deliver reliability, scalability, and long-term value.",
      icon: <IconTerminal2 />,
    },
    {
      title: "Intuitive Experience",
      description:
        "User-first design that keeps workflows clear, efficient, and easy to adopt across teams.",
      icon: <IconEaseInOut />,
    },
    {
      title: "Transparent Pricing",
      description:
        "Clear and competitive pricing with no hidden conditions, helping you plan with confidence.",
      icon: <IconCurrencyDollar />,
    },
    {
      title: "Reliable Availability",
      description: "Stable infrastructure and proactive monitoring to keep your business running without interruption.",
      icon: <IconCloud />,
    },
    {
      title: "Scalable Architecture",
      description: "Modern system design that grows with your organization while maintaining performance and security.",
      icon: <IconRouteAltLeft />,
    },
    {
      title: "Responsive Support",
      description:
        "Dedicated support and timely assistance to resolve issues quickly and keep operations smooth.",
      icon: <IconHelp />,
    },
    {
      title: "Quality Commitment",
      description:
        "Every engagement is guided by measurable outcomes, high standards, and accountable delivery.",
      icon: <IconAdjustmentsBolt />,
    },
    {
      title: "Trusted Partnership",
      description: "We collaborate closely with your team to build practical solutions aligned with your goals.",
      icon: <IconHeart />,
    },
  ];
  return (
    <div className="py-4 mx-4 sm:mx-8 md:mx-16">
        <h2 className="text-2xl sm:text-3xl font-semibold">Why Choose Us</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 relative z-10 py-2 sm:py-4 md:py-10 max-w-7xl mx-auto">
        {features.map((feature, index) => (
            <Feature key={feature.title} {...feature} index={index} />
        ))}
        </div>
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "cursor-pointer flex flex-col lg:border-r py-4 md:py-6 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-gray-800 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-gray-800 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-4 md:px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-teal-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-100 text-sm md:text-lg">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-4 md:px-10">
        {description}
      </p>
    </div>
  );
};
