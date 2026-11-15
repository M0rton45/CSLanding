import { CalendarDays, LucideIcon} from "lucide-react";

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
        emote: CalendarDays,
    },
    {
        id: "2",
        title: "Sprzątanie po remoncie",
        description:"Pył, plamy z farb lub z innych \n materiałów budowlanych znikną.",
        emote: CalendarDays,
    }

]
