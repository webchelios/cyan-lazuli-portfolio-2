import type { WorkPage } from "../types/works.types";


export const works: WorkPage[] = [
    {
        slug: "desencuentros",
        title: "Desencuentros",
        description: "Son una serie de dibujos",
        mainImage: { image: "/images/trabajos/desencuentros/dibujo1.jpg", },
        images: [
            { image: "/images/trabajos/desencuentros/dibujo2.jpg", },
            { image: "/images/trabajos/desencuentros/dibujo3.jpg", },
            { image: "/images/trabajos/desencuentros/dibujo4.jpg", },
        ]
    },
    {
        slug: "poemario",
        title: "Poemario",
        description: "Otro proyecto",
        mainImage: { image: "/images/poemario/poemario1.png" },
        images: [
            { image: "/images/poemario/poemario2.png", },
            { image: "/images/poemario/poemario3.png", },
            { image: "/images/poemario/poemario4.png", },
            { image: "/images/poemario/poemario5.png", },
        ]
    },
    {
        slug: "maquillaje",
        title: "Maquillaje artístico",
        description: "Otro proyecto",
        mainImage: { image: "/images/fotografias/maquillaje1.jpg" },
        images: [
            { image: "/images/fotografias/maquillaje2.jpg" },
            { image: "/images/fotografias/maquillaje3.jpg" },
            { image: "/images/fotografias/maquillaje4.jpg" },
            { image: "/images/fotografias/maquillaje5.jpg" },
            { image: "/images/fotografias/maquillaje6.jpg" },
            { image: "/images/fotografias/maquillaje7.jpg" },
            { image: "/images/fotografias/maquillaje8.jpg" },
        ]
    }
];

/*
            title="Titulo de prueba"
            description="Descripción de prueba"
            mainImage={{
                image: "./images/trabajos/desencuentros/dibujo1.jpg",
                size: "20cm x 20cm",
            }}
            images={[
                {
                    image: "./images/trabajos/desencuentros/dibujo2.jpg",
                    size: "20cm x 20cm",
                },
                {
                    image: "./images/trabajos/desencuentros/dibujo3.jpg",
                    size: "20cm x 20cm",
                },
                {
                    image: "./images/trabajos/desencuentros/dibujo4.jpg",
                    size: "20cm x 20cm",
                },
            ]}
*/