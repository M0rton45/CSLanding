import { HeroItem, ServiceLink } from "@/data/data";

export const Navbar = ({list}: {list: ServiceLink[]}) => (
    <nav className="flex gap-4">
        <h1>Czyszczenie na błysk</h1>
        <ul className="flex gap-4">
            {list.map((item) =>(
                <li key={item.id}>
                    <a href={item.link}>
                        {item.text}
                    </a>
                </li>
            ))}
        </ul>
    </nav>
);

export const Hero = ({list}: {list: HeroItem[]}) => (
        <section className="flex">
            {list.map((item) =>(
                <div key={item.id}>
                    <h2>{item.title}</h2>
                    <p>{item.description}</p>
                </div>                
            ))}
        </section>
)
export const Footer = () => (
    <footer className="flex">
        <h3>Umów sprzątanie już teraz!</h3> 
        <a href="tel:+48500000000">Zadzwoń lub napisz</a>
    </footer>
);

