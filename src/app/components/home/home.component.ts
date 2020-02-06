import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public products = [
    { _id: 1, price: 180, name: 'Modern Chair', img: '1.jpg', descript: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.` },
    { _id: 2, price: 180, name: 'Minimalistic Plant Pot', img: '2.jpg' ,descript: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.` },
    { _id: 3, price: 180, name: 'Modern Chair', img: '3.jpg' ,descript: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.` },
    { _id: 4, price: 18, name: 'Plant Pot', img: '4.jpg' ,descript: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.` },
    { _id: 5, price: 320, name: 'Small Table', img: '5.jpg' ,descript: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.` },
    { _id: 6, price: 180, name: 'Night Stand', img: '6.jpg' ,descript: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.` },
    { _id: 7, price: 318, name: 'Modern Rocking Chair', img: '7.jpg' ,descript: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.` },
    { _id: 8, price: 318, name: 'Home Deco', img: '8.jpg' ,descript: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.` },
    { _id: 9, price: 318, name: 'Metalic Chair', img: '9.jpg' ,descript: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.` },
  ];

  constructor() { }

  ngOnInit() {
    localStorage.setItem('products', JSON.stringify(this.products));
  }

}
