export class Member {
  firstName: string;
  lastName: string;
  eMail: string;
  noLeanCaseProject: any;
  dateStatusChange: string;
  dateLastLogin: string;
  Action: any;

  constructor(firstName: string, lastName: string, eMail: string,
    noLeanCaseProject: any, dateStatusChange: string,
    dateLastLogin: string, Action: any) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.eMail = eMail;
      this.noLeanCaseProject = noLeanCaseProject;
      this.dateStatusChange = dateStatusChange;
      this.dateLastLogin = dateLastLogin;
      this.Action = Action;
  }
}
