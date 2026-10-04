interface UserDetailProp {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
}

export class UserDetailEntity {
  public readonly id: string;
  public readonly email: string;
  public readonly firstName: string;
  public readonly lastName: string;

  constructor(props: UserDetailProp) {
    this.id = props.id;
    this.email = props.email;
    this.firstName = props.firstName;
    this.lastName = props.lastName;
  }
}
