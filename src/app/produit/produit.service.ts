import { Produit } from './../shared/produit';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_URLS } from '../config/app.url.config';

@Injectable()
export class ProduitService{
  [x: string]: any;

  constructor( private http : HttpClient){

  }

  getProduits() : Observable<any>{
    return this.http.get(API_URLS.PRODUIT_URL);
  }

  addProduit(produit: Produit) : Observable<any>{
    return this.http.post(API_URLS.PRODUIT_URL, produit);
  }

  updateProduit(produit: Produit) : Observable<any>{
    return this.http.put(API_URLS.PRODUIT_URL, produit);
  }

  deleteProduit(ref?: string) : Observable<any>{
    return this.http.delete(API_URLS.PRODUIT_URL + `/${ref}`);
  }

}
