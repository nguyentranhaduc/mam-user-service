interface UserProp {
  id?: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

export class UserEntity {
  public readonly id?: string;
  public readonly email: string;
  public readonly password: string;
  public readonly firstName: string;
  public readonly lastName: string;

  constructor(props: UserProp) {
    this.id = props.id;
    this.email = props.email;
    this.password = props.password;
    this.firstName = props.firstName;
    this.lastName = props.lastName;
  }
}
