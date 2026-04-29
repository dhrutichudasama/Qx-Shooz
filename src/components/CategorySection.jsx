import menImg from "../assets/grid-three-1.webp";
import womenImg from "../assets/grid-three-2.webp";
import kidImg from "../assets/grid-three-3.webp";

const categories = [
  {
    title: (
      <>
        Men <br /> Collections
      </>
    ),
    tag: "TRENDING",
    image: menImg,
  },
  {
    title: (
      <>
        Women <br /> Collections
      </>
    ),
    tag: "LATEST",
    image: womenImg,
  },
  {
    title: (
      <>
        Kid <br /> Collections
      </>
    ),
    tag: "COMFORT",
    image: kidImg,
  },
];

export default function CategorySection() {
  return (
    <section className="py-12 md:py-16 px-6 md:px-14">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-5">
        
        {categories.map((item, index) => (
          <div
            key={index}
            className="relative h-[260px] md:h-[300px] rounded-md overflow-hidden group"
          >
            {/* Background Image */}
            <img
              src={item.image}
              alt={item.title}
              className="absolute inset-0 w-full h-full object-cover object-right transition-transform duration-500 group-hover:scale-105"
            />

            {/* Content FULL LEFT SIDE */}
            <div className="relative z-10 h-full flex flex-col justify-center pl-6 md:pl-8 pr-20">
              
              <p className="text-[11px] tracking-[2px] text-black/70 uppercase mb-2">
                {item.tag}
              </p>

              <h2 className="text-2xl md:text-3xl font-semibold text-black leading-snug">
                {item.title}
              </h2>

              <p className="mt-4 text-sm text-red-500 font-medium underline underline-offset-4">
                SHOP NOW
              </p>
            </div>

            {/* Optional subtle overlay */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition"></div>
          </div>
        ))}

      </div>
    </section>
  );
}