import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-home-list',
  templateUrl: './products-home-list.component.html',
  styleUrls: ['./products-home-list.component.css']
})
export class ProductsHomeListComponent implements OnInit {
  
  public products = [
    { _id: 1, price: 180, name: 'Modern Chair', img: '1.jpg', descript: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.` },
    { _id: 2, price: 180, name: 'Minimalistic Plant Pot', img: '2.jpg' ,descript: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.` },
    { _id: 3, price: 180, name: 'Modern Chair', img: '3.jpg' ,descript: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.` },
    { _id: 4, price: 18, name: 'Plant Pot', img: '4.jpg' ,descript: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.` },
    { _id: 5, price: 320, name: 'Small Table', img: '5.jpg' ,descript: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.` },
    { _id: 6, price: 180, name: 'Night Stand', img: '6.jpg' ,descript: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.` },
  ]

  public path = 'assets/bg-img/';

  constructor() { }

  ngOnInit() {
  }

}
