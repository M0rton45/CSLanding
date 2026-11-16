import { Sparkles } from 'lucide-react';
import { HeroItem, ServiceLink, tel, bubbles } from "@/data/data";
import Link from 'next/link';

export const Navbar = ({list}: {list: ServiceLink[]}) => (
    <nav className="flex flex-wrap items-center gap-x-4 gap-y-2 px-4 my-4 justify-between">
        <h1 className='flex'>
            <Sparkles className='pr-2 text-brand-icons'/>
            Błysk w mig
        </h1>
        <ul className="flex flex-wrap gap-4">
            {list.map((item) =>(
                <li key={item.id}>
                    <Link href={item.link}>
                        {item.text}
                    </Link>
                </li>
            ))}
        </ul>
    </nav>
);

export const Bubbles = () => (
  <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden motion-reduce:hidden">
    {bubbles.map((b, i) => (
      <span
        key={i}
        className="bubble absolute bottom-0 rounded-full border border-brand-pink bg-white/30"
        style={{
          width: b.size,
          height: b.size,
          left: b.left,
          animationDuration: `${b.duration}s`,
          animationDelay: `${b.delay}s`,
        }}
      />
    ))}
  </div>
);
export const Hero = ({list, className}: {list: HeroItem[], className?: string}) => (
        <section className={`pt-7 pb-9 flex justify-center  ${className || ''}`}>
            {list.map((item) =>(
                <div key={item.id}>
                    <h2 className="text-[25px]">{item.title}</h2>
                    <p>{item.description}</p>
                    {item.location && <p className="text-[15px] font-bold">{item.location}</p>}
                </div>                
            ))}
        </section>
)
export const Info = ({list}: {list: HeroItem[]}) => (
    <section className="grid grid-cols-1 gap-1 md:gap-6 md:grid-cols-3 m-8 md:mt-20 align-center">
        {list.map((item) => {
            const Emote = item.emote;
            return (
                <div key={item.id} className="border-2 border-brand-pink bg-brand-white rounded-lg p-2 my-5 p-2">
                    <h3 className="text-[24px] text-brand-maintext flex items-center p-2">
                        {Emote && <Emote aria-hidden="true" className="text-brand-icons mr-2" />}
                        {item.title}
                    </h3>
                    <p className="text-[15px] pl-2 pb-3 text-brand-subtext whitespace-pre-line">{item.description}</p>
                </div>
            );
        })}
    </section>
)
// bg-brand-pink
export const Footer = () => (
    <footer className="bg-brand-pink py-4 flex-1 flex items-center justify-center">
        <a href={`tel:${tel}`} className="flex flex-wrap justify-around text-center gap-5 sm:gap-5">
            <h4 className="text-brand-maintext p-3 md:mr-5">Umów sprzątanie już teraz!</h4>
            <p className="bg-brand-accent text-brand-white p-3 md:ml-5 rounded-[20px]">Zadzwoń lub napisz</p>
        </a>
    </footer>
);

