import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { AjoutContactComponent } from './ajout-contact/ajout-contact.component';
import { ListeContactsComponent } from './liste-contacts/liste-contacts.component';
import { DetailsContactComponent } from './details-contact/details-contact.component';
import { ModifierContactComponent } from './modifier-contact/modifier-contact.component';
import { FilterContactsPipe } from './pipes/filter-contacts.pipe';


@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    AjoutContactComponent,
    ListeContactsComponent,
    DetailsContactComponent,
    ModifierContactComponent,
    FilterContactsPipe 

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
