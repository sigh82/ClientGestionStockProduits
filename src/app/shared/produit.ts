export interface IProduit{
  id?: number;
  ref? : string,
  quantite? : number,
  prixUnitaire? : number
}


export class Produit implements IProduit{
  constructor(
    public id? : number,
    public ref? : string,
    public quantite? : number,
    public prixUnitaire? : number
  ){}
}
