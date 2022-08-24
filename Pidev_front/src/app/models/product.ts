export class Product {
  id: number;
  name: string;
  description: string;
  prix: number;
  image: string;

  constructor(id:number, name:string, description = '', price = 0, imageUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR608TWmLRWFNYPlY5xgKkgZPYe7mwv0GDMDtAS9nRdlVo4aytG') {
    this.id = id
    this.name = name
    this.description = description
    this.prix = price
    this.image = imageUrl
  }
}
