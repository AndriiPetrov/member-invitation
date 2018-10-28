import { Injectable } from "@angular/core";
import { Member } from "./member.model";

@Injectable()
export class MembersService {

    data: Member[] = [
        { firstName: "Bob", lastName: "Wilkinson", eMail: "Bobwilk@gmail.com", noLeanCaseProject: 2, dateStatusChange: "20180405", dateLastLogin: "20180607", Action: "Let's make a great world"},
        { firstName: "Marta", lastName: "Stuard", eMail: "MartaStuard@gmail.com", noLeanCaseProject: 2, dateStatusChange: "20180405", dateLastLogin: "20180607", Action: "Let's make a great world"},
        { firstName: "Dave", lastName: "Karvalia", eMail: "DaveKarvalia@gmail.com", noLeanCaseProject: 2, dateStatusChange: "20180405", dateLastLogin: "20180607", Action: "Let's make a great world"},
    ];
    
}