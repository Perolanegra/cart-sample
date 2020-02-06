import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-products-home-list',
  templateUrl: './products-home-list.component.html',
  styleUrls: ['./products-home-list.component.css']
})
export class ProductsHomeListComponent implements OnInit {

  public path = 'assets/bg-img/';

  constructor(private router: Router) { }

  ngOnInit() {
  }

  openDetails(_id) {
    try {
      this.router.navigate(['product/product-details', _id]);
    } catch (error) {
      alert(error.msg);
    }
  }

  public get products() {
    return JSON.parse(localStorage.getItem('products'));
  }

}
