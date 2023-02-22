
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_URLS } from '../config/app.url.config';
import { IProduit } from '../shared/produit';


@Injectable()
export class ProduitService{

  constructor( private http : HttpClient){

  }

  getProduits() : Observable<any>{
    return this.http.get(API_URLS.PRODUIT_URL);
  }

  addProduit(produit: IProduit) : Observable<IProduit>{
    return this.http.post<IProduit>(API_URLS.PRODUIT_URL, produit);
  }

  updateProduit(produit: IProduit) : Observable<any>{
    return this.http.put(API_URLS.PRODUIT_URL, produit);
  }

  deleteProduit(id?: number) : Observable<any>{
    return this.http.delete(API_URLS.PRODUIT_URL + `/${id}`);
  }

}
