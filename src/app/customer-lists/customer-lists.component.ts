import { Component } from '@angular/core';
import { Customer } from './customers';

@Component({
  selector: 'app-customer-lists',
  templateUrl: './customer-lists.component.html',
  styleUrls: ['./customer-lists.component.css']
})
export class CustomerListsComponent {

  selectedCustomer: Customer = { customerNo : 0, name : "", address : "", city: "", country : "" };


  customers: Customer[] = [
    { customerNo: 1, name: "John", address: "123 Main St", city : "Atlanta", country: "USA" },
    { customerNo: 2, name: "Amina", address: "456 Elm St", city : "Ohio", country: "USA" },
    { customerNo: 3, name: "Laura", address: "789 Oak St", city : "Lagos", country: "Nigeria" },
    { customerNo: 4, name: "Uthman", address: "101 Pine St", city: "Atlanta", country: "USA" },
    { customerNo: 5, name: "Abdullahi", address: "222 Maple St", city: "Turpinto", country: "Canada" },
  ];
}
