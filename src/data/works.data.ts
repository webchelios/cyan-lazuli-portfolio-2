import type { WorkPage } from "../types/works.types";


export const works: WorkPage[] = [
    {
        slug: "grabado",
        title: "De corazón, dolor",
        description: 'Este proyecto que abarca diferentes técnicas de Grabado tales como Mezzotinta, Aguatinta al crayón y Puntaseca entre otras, busca indagar en una cuestión que solemos dar por sentada, pero que no es menos curiosa e interesante de abordar, y es la relación que establece la cultura occidental entre el corazón y las emociones humanas. De esta manera decidí realizar un abordaje visual de metáforas en las que el dolor físico aparece representando al dolor emocional y viceversa, así como también se puede dar una fusión entre ambos. De este modo sucede que el dolor es algo que va emergiendo en estas reflexiones visuales, así como sentimientos de euforia o exaltación emocional, que son justamente las que hacen latir con rapidez a este gran "saltador" que nos acompaña durante el resto de nuestras vidas.',
        mainImage: { image: "/images/grabado/grabado1.jpg" },
        images: [
            { image: "/images/grabado/grabado2.jpg" },
            { image: "/images/grabado/grabado3.jpg" },
            { image: "/images/grabado/grabado4.jpg" },
            { image: "/images/grabado/grabado5.jpg" },
            { image: "/images/grabado/grabado6.jpg" },
            { image: "/images/grabado/grabado7.jpg" },
            { image: "/images/grabado/grabado8.jpg" },
        ]
    },
    {
        slug: "pinturas",
        title: "Rigidez que se esfuma",
        description: 'El título del proyecto es pertinente al concepto, pues se trata de abordar e indagar en uno de los aspectos que ronda a la posmodernidad: el vacío. Remontándonos a esta época de capitalismo financiero, que a nivel económico implica no sólo un sistema desigual e injusto, sino que además, a nivel social y cultural, representa una sociedad de rendimiento donde prima el individualismo y la meritocracia; viendose afectado nuestro modo de relacionarnos, de vivir nuestras experiencias, en las que prepondera la inmediatez y se pierde justamente la experiencia. En torno a estas cuestiones discurre este proyecto que a nivel plástico decidí realizarlo a la manera de "pinturas expandidas" con soporte irregular en ciertos casos, que creo coinciden con lo caótico del tema en cuestión. Las obras entonces parten de la bidimensión para ir aproximándose de a poco a la tridimensión.',
        mainImage: { image: "/images/pinturas/pintura1.jpg" },
        images: [
            { image: "/images/pinturas/pintura2.jpg" },
            { image: "/images/pinturas/pintura3.jpg" },
            { image: "/images/pinturas/pintura4.jpg" },
            { image: "/images/pinturas/pintura5.jpg" },
        ]
    },
    {
        slug: "desencuentros",
        title: "Desencuentros",
        description: "Este proyecto artístico consta de imagenes de la figura humana que pretenden dar cuenta de una problemática actual que es la de las relaciones humanas mediadas por las redes sociales. Se explora el trabajo de la figura humana, así como desde el punto de vista discursivo se hace énfasis en un dilema que nos atraviesa hoy en día; la paradoja de la dificultad del encuentro en la era de la hiperconectividad.",
        mainImage: { image: "/images/trabajos/desencuentros/dibujo1.jpg", },
        images: [
            { image: "/images/trabajos/desencuentros/dibujo2.jpg", },
            { image: "/images/trabajos/desencuentros/dibujo3.jpg", },
            { image: "/images/trabajos/desencuentros/dibujo4.jpg", },
        ]
    },
    {
        slug: "maquillaje",
        title: "Maquillaje artístico",
        description: "Fotografías por Alexis Sepúlveda Catalán, modelo: Agustina Giménez",
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
    },
    {
        slug: "poemario",
        title: "Poemario",
        description: "Poemas de mi autoría",
        mainImage: { image: "/images/poemario/poemario1.png" },
        images: [
            { image: "/images/poemario/poemario2.png", },
            { image: "/images/poemario/poemario3.png", },
            { image: "/images/poemario/poemario4.png", },
            { image: "/images/poemario/poemario5.png", },
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