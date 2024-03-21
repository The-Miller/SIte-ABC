import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Contact } from '../model/contact.model';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-details-contact',
  templateUrl: './details-contact.component.html',
  styleUrls: ['./details-contact.component.css']
})
export class DetailsContactComponent implements OnInit {
  contact: Contact | undefined;

  constructor(
    private route: ActivatedRoute,
    private contactService: ContactService
  ) {}

  ngOnInit() {
    this.getContactDetails();
  }

  getContactDetails() {
    this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.contactService.getContactById(params.get('id')!))
    ).subscribe(contact => {
      this.contact = contact;
    });
  }
}

