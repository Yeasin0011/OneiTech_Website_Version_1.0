import Image from "next/image";
import Link from "next/link";
import BlurFade from "../magicui/blur-fade";

const Featured = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <BlurFade delay={0.25} inView>
      <h2 className="text-2xl sm:text-3xl font-bold mb-8 container px-4">Featured Works</h2>
      <div className="flex flex-col sm:flex-row flex-wrap justify-around gap-4 px-4">
        <div className="w-full sm:w-[48%] md:w-[45%] mb-8 bg-gray-900 rounded-xl p-4 cursor-pointer">
          <Image
            src="/web-dev.png"
            alt="Web Development"
            width={320}
            height={180}
            className="object-cover w-full h-48 rounded-[20px] shadow-lg"
          />
          <h3 className="text-xl font-semibold mt-4">Web Development</h3>
          <p className="mt-2 text-gray-600">Visit to see some of our projects</p>
        </div>
        <Link href="/graphics" className="w-full sm:w-[48%] md:w-[45%] mb-8 bg-gray-900 rounded-xl p-4 cursor-pointer block">
          <Image
            src="/graphic-design.jpg"
            alt="Work 2"
            width={320}
            height={180}
            className="object-cover w-full h-48 rounded-[20px] shadow-lg"
          />
          <h3 className="text-xl font-semibold mt-4">Graphic Design</h3>
          <p className="mt-2 text-gray-600">Explore the creativity of our team</p>
        </Link>
      </div>
      </BlurFade>
    </div>
  );
};

export default Featured;
