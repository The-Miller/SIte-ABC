import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjoutContactComponent } from './ajout-contact/ajout-contact.component';
import { ListeContactsComponent } from './liste-contacts/liste-contacts.component';
import { DetailsContactComponent } from './details-contact/details-contact.component';
import { ModifierContactComponent } from './modifier-contact/modifier-contact.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';


const routes: Routes = [
  { path: '', component: AccueilComponent }, 
  { path: '', redirectTo: '/liste-contacts', pathMatch: 'full' }, 
  { path: 'ajouter-contact', component: AjoutContactComponent },
  { path: 'liste-contacts', component: ListeContactsComponent },
  { path: 'details/:id', component: DetailsContactComponent },
  { path: 'modifier/:id', component: ModifierContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    BrowserModule,
    HttpClientModule,],
  exports: [RouterModule]
})
export class AppRoutingModule { }


