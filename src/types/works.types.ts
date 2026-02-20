export interface WorkImage {
    image: string;
    size?: string;
}

export interface WorkPage {
    slug: string;
    title: string;
    description: string;
    mainImage: WorkImage;
    images: WorkImage[];
}