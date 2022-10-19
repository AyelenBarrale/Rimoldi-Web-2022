type StaticImageData = { src: string ; height: number; width: number; blurDataURL?: string; }

export interface IWork {
    title?: string,
    subtitle?: string,
    type?: string,
    workType?: string,
    client?: string,
    services?: string,
    year?: string,
    description?: string,
    previewImage: string |StaticImageData,
    leadImage?: string |StaticImageData,
    blockImage?: string |StaticImageData,
    gif?: string,
    singleImage?: string |StaticImageData,
    video?: string,
    slug?: string,
    id?: string,
    imageFull?: string |StaticImageData,
    imageTop?: string |StaticImageData,
    detailImageI?: string |StaticImageData,
    detailImageII?: string |StaticImageData,
    resourceImage?: string |StaticImageData
}