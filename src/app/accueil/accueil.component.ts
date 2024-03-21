import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit{
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  versListeContacts(): void {
    this.router.navigate(['/liste-contacts']);
  }

  versAjouterContact(): void {
    this.router.navigate(['/ajouter-contact']);
  }

}
