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