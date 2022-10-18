import { Customer } from './customer';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-list',
  templateUrl: './custom-list.component.html',
  styleUrls: ['./custom-list.component.css'],
})
export class CustomListComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  selectedCustomer: any;
  customers: Customer[] = [
    { customerNo: 1, name: 'Mark', address: '', city: 'London', country: 'UK' },
    {
      customerNo: 2,
      name: 'John',
      address: '',
      city: 'New York',
      country: 'USA',
    },
    {
      customerNo: 3,
      name: 'Merry',
      address: '',
      city: 'Berlin',
      country: 'Germany',
    },
    {
      customerNo: 4,
      name: 'Rajesh',
      address: '',
      city: 'Mumbao',
      country: 'India',
    },
    {
      customerNo: 5,
      name: 'Rahul',
      address: '',
      city: 'Delhi',
      country: 'India',
    },
  ];
}
