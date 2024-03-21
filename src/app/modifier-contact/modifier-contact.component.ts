
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Contact } from '../model/contact.model';
import { ContactService } from '../contact.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modifier-contact',
  templateUrl: './modifier-contact.component.html',
  styleUrls: ['./modifier-contact.component.css']
})
export class ModifierContactComponent implements OnInit {
  contact: Contact = new Contact('', '', '', '', '', '');

  constructor(
    private route: ActivatedRoute,
    private contactService: ContactService,
    private router: Router
  ) {}

  ngOnInit() {
    this.getContactDetails();
  }
  getContactDetails() {
    this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        const id = params.get('id');
        if (id) {
          return this.contactService.getContactById(id);
        } else {
          throw new Error('ID parameter is missing');
        }
      })
    ).subscribe(contact => {
      if (contact) {
        this.contact = contact;
      } else {
        throw new Error('ID parameter is missing');
      }
    });
  }

  modifierContact() {
    this.contactService.updateContact(this.contact.id, this.contact).subscribe(() => {
      this.contact = new Contact('', '', '', '', '', '');
      this.router.navigate(['/liste-contacts']);
    });
  }
}


