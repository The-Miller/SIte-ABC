export class Contact {
    id: string;
    nom: string;
    prenom: string;
    telephone: string;
    adresse: string;
    email: string;
    photo: string;
    constructor(
      nom: string,
      prenom: string,
      telephone: string,
      adresse: string,
      email: string,
      photo: string
    ) {
      this.nom = nom;
      this.prenom = prenom;
      this.telephone = telephone;
      this.adresse = adresse;
      this.email = email;
      this.photo = photo;
      this.id = this.generateId();
    }
  
    private generateId(): string {
      return 'ID_' + Math.random().toString(36).substr(2, 9);
    }
  }
  