import { ProduitService } from './produit.service';
import { IProduit, Produit } from './../shared/produit';
import { ProduitMockSevice } from './produit.mock.service';
import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector : 'app-produit',
  templateUrl : './produit.component.html',
  styleUrls : ['./produit.component.css']
})

export class ProduitComponent implements OnInit{

  produits: IProduit[] = [];

  produitForm!: FormGroup;

  operation : string = 'add';

  selectedProduit!: IProduit;

  constructor(private fb : FormBuilder, private produitService : ProduitService, private route : ActivatedRoute){
    this.createForm();
  }
  ngOnInit() {
    this.initProduit();
    this.produits = this.route.snapshot.data['produits'];
  }

  loadProduits(){
    this.produitService.getProduits().subscribe(
      data => (this.produits = data),
      error => (console.log("An error was occurd.")),
      () => (console.log("Load produits was done"))
    )
  }

  createForm(){
    this.produitForm = this.fb.group({
      ref : ['', Validators.required],
      quantite: '',
      prixUnitaire:''
    });
  }

  addProduit() {
    const p = this.produitForm.value;
    this.produitService.addProduit(p).subscribe(
      (res : IProduit) => {
        console.log(res);
        this.createForm();
        this.loadProduits();
      },
      (error: HttpErrorResponse) => {
        window.alert("No Product found");
      }
    );
  }

  updateProduit(){
    this.produitService.updateProduit(this.selectedProduit)
      .subscribe(
        res => {
          this.createForm();
          this.loadProduits();
        }
      )
  }

  initProduit(){
     this.selectedProduit = new Produit();
     this.createForm();
  }

  deleteProduit(){
    this.produitService.deleteProduit(this.selectedProduit.id)
    .subscribe(
      res => {
        this.selectedProduit = new Produit();
        this.loadProduits();
      }
    );
  }


}
