import { Serv } from "./serv";
export class appRole {
 id?:Number;
 roleName?:String;

}
export class Employee {
    id?: Number ;
    nom?: String ;
    prenom?: String;
    cin?: Number;
    tel?: Number;
    matricule?: Number;
    adresse?: String;
    email?: String;
    tel_interne?: Number;
    poste?:String;
    service?: Serv;
    role?:appRole;
}
