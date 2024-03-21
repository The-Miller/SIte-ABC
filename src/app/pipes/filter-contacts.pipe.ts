import { Pipe, PipeTransform } from '@angular/core';
import { Contact } from '../model/contact.model';

@Pipe({
  name: 'filterContacts'
})
export class FilterContactsPipe implements PipeTransform {
  transform(contacts: Contact[], term: string): Contact[] {
    if (!contacts || !term) {
      return contacts;
    }
    return contacts.filter(contact =>
      contact.nom.toLowerCase().includes(term.toLowerCase()) ||
      contact.prenom.toLowerCase().includes(term.toLowerCase()) ||
      contact.telephone.includes(term)
    );
  }
}
