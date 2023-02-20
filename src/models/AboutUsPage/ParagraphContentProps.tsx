export type ParagraphContentProps ={
    title : string;
    text: string
}

export interface ImageParagraphContentProps extends ParagraphContentProps  {
    imageUrl: string;

}