import { Mesure } from "../Mesure/mesure";

export class Client {
    idClient!: number;
    nom!: string;
    prenom!: string;
    cni!: string;
    adresse!: string;
    sexe!: string;
    email!: string;
    telephone!: string;
    mesure !: Mesure;
}