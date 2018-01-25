export class Users {
    first_name: string;
    last_name: string;
    email: string;
    password: string;
    password_confirmation: string;
    street_address: string;
    unit_apt: string;
    city: string;
    state: string;
    lucky: string;
    constructor(first_name: string = "", last_name: string = "", email: string = "", password: string = "", password_confirmation: string = "", street_address: string = "", unit_apt: string = "", city: string = "", state: string = "", lucky: string = "",){
        console.log('This: ', this);
        this.first_name = first_name;
        this.last_name = last_name;
        this.email = email;
        this.password = password;
        this.password_confirmation = password_confirmation;
        this.street_address = street_address;
        this.unit_apt = unit_apt;
        this.city = city;
        this.state = state;
        this.lucky = lucky;
    }
}
