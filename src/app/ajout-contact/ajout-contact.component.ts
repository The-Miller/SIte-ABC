import { Component, OnInit } from '@angular/core';
import { Contact } from '../model/contact.model';
import { ContactService } from '../contact.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-ajout-contact',
  templateUrl: './ajout-contact.component.html',
  styleUrls: ['./ajout-contact.component.css']
})
export class AjoutContactComponent implements OnInit{
  contact: Contact = new Contact('', '', '', '', '', '');

  constructor(private contactService: ContactService, private router: Router) {}
  ngOnInit(): void {
  }

  ajouterContact() {
    this.contactService.addContact(this.contact).subscribe(() => {
      this.contact = new Contact('', '', '', '', '', '');
      this.router.navigate(['/liste-contacts']);
    });
  }


  resetForm(form: NgForm) {
    form.resetForm(); 
  }
}



