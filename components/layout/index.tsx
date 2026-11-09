import { HeroItem, ServiceLink, tel } from "@/data/data";
import Link from 'next/link';

export const Navbar = ({list}: {list: ServiceLink[]}) => (
    <nav className="flex gap-4">
        <h1>Czyszczenie na błysk</h1>
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
        <section className={`flex ${className || ''}`}>
            {list.map((item) =>(
                <div key={item.id}>
                    <h2>{item.title}</h2>
                    <p>{item.description}</p>
                    {item.location && <p>{item.location}</p>}
                </div>                
            ))}
        </section>
)
export const Footer = () => (
    <footer className="flex bg-brand-pink">
        <h3>Umów sprzątanie już teraz!</h3> 
        <a href={`tel:${tel}`}>Zadzwoń lub napisz</a>
    </footer>
);

