export interface ServiceLink {
    id: number;
    text: string;
    link: string;
}

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
    emote?:string,
}
export const heroItems: HeroItem[] = [
    {
        id: "0",
        title: "Czysty dom, bez wysiłku",
        description: "Szybko, skutecznie i na twoją kieszeń.",
    }
]
export const infoItems: HeroItem[] = [
    {
        id: "0",
        title: "Sprzątanie regularne",
        description:"Co tydzień lub co dwa tygodnie.",
    },
    {
        id: "1",
        title: "Generalne porządki",
        description:"Jednorazowe sprzątanie przed imprezą czy swiętami.",
    },
    {
        id: "2",
        title: "Sprzątanie po remoncie",
        description:"Pył, plamy z farb lub innych materiałów budowlanych znikną."
    }

]
