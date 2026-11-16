import { CalendarDays, HouseCog, LucideIcon, MopSparkles} from "lucide-react";

export interface ServiceLink {
    id: number;
    text: string;
    link: string;
}
export const tel = "+48500000000"
export const mail = "mail@gmail.com"

export const services: ServiceLink[] =[
    {
        id: 0,
        text: "Home",
        link: "/"
    },
    {
        id: 1,
        text: "Kontakt",
        link: "/contact"
    },
    {
        id: 2,
        text: "O nas",
        link: "/about"
    }
]
export interface HeroItem {
    id: string,
    title: string,
    description: string,
    emote?:LucideIcon,
    location?:string,
}
export const heroItems: HeroItem[] = [
    {
        id: "0",
        title: "Czysty dom, bez wysiłku",
        description: "Szybko, skutecznie i na twoją kieszeń.",
        location: "Częstochowa i okolice",
    }
]
export const infoItems: HeroItem[] = [
    {
        id: "0",
        title: "Sprzątanie regularne",
        description:"Co tydzień lub co dwa tygodnie.",
        emote: CalendarDays,
    },
    {
        id: "1",
        title: "Generalne porządki",
        description:`Jednorazowe sprzątanie \n przed imprezą czy swiętami.`,
        emote: MopSparkles,
    },
    {
        id: "2",
        title: "Sprzątanie po remoncie",
        description:"Pył, plamy z farb lub z innych \n materiałów budowlanych znikną.",
        emote: HouseCog,
    }

]

export const bubbles = [
  { size: 24, left: "8%",  duration: 9,  delay: 0 },
  { size: 40, left: "22%", duration: 12, delay: 2 },
  { size: 16, left: "40%", duration: 8,  delay: 4 },
  { size: 32, left: "60%", duration: 11, delay: 1 },
  { size: 20, left: "78%", duration: 10, delay: 3 },
  { size: 36, left: "90%", duration: 13, delay: 5 },
];