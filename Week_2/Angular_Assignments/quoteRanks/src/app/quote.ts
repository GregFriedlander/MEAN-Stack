export class Quote {
    quote: string;
    author: string;
    rating: number; 
    constructor(quote:string = "", author:string = "", rating:number = 0){
        this.quote = quote;
        this.author = author;
        this.rating = rating; 
    }
}
