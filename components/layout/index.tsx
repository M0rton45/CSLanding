import { Sparkles } from 'lucide-react';
import { HeroItem, ServiceLink, tel } from "@/data/data";
import Link from 'next/link';

export const Navbar = ({list}: {list: ServiceLink[]}) => (
    <nav className="flex px-8 gap-1 my-4 justify-between px-4">
        <h1 className='flex'>
            <Sparkles className='pr-2'/>
            Błysk w mig
        </h1>
        <ul className="flex gap-4">
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

export const Hero = ({list, className}: {list: HeroItem[], className?: string}) => (
        <section className={`flex justify-center pt-4 pb-7 ${className || ''}`}>
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
    <section className="flex flex-wrap my-8 justify-center">
        {list.map((item) => {
            const Emote = item.emote;
            return (
                <div key={item.id} className="border-2 border-[#D499AC] min-w-[300px] rounded-lg p-2 my-5">
                    <h3 className="text-[24px] flex items-center p-2">
                        {Emote && <Emote aria-hidden="true" />}
                        {item.title}
                    </h3>
                    <p className="text-[15px] pl-2 pb-3 whitespace-pre-line">{item.description}</p>
                </div>
            );
        })}
    </section>
)
// bg-brand-pink
export const Footer = () => (
    <footer className=" bg-[#D499AC] py-4">
        
        <a href={`tel:${tel}`} className="flex justify-center gap-5">
            <h4>Umów sprzątanie już teraz!</h4>
            <p className="bg-brand-accent">Zadzwoń lub napisz</p>
        </a>
    </footer>
);

