import { Component, OnInit } from '@angular/core';
import { Contact } from '../model/contact.model';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-liste-contacts',
  templateUrl: './liste-contacts.component.html',
  styleUrls: ['./liste-contacts.component.css']
})
export class ListeContactsComponent implements OnInit {
  contacts: Contact[] = [];
  searchTerm: string = '';
  filteredContacts: Contact[] = [];



  constructor(private contactService: ContactService) {}

  ngOnInit() {
    this.getAllContacts();
  }

  getAllContacts() {
    this.contactService.getAllContacts().subscribe(contacts => {
      this.contacts = contacts;
      this.filterContacts();
    });
  }

   filterContacts() {
    this.filteredContacts = this.contacts.filter(contact =>
      contact.nom.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      contact.prenom.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      contact.telephone.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
    clearSearchTerm() {
      this.searchTerm = '';
      this.filterContacts();
    }

  supprimerContact(id: string) {
    this.contactService.deleteContact(id).subscribe(() => {
      this.getAllContacts();
    });
  }
}


