import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  public qtd;
  constructor(private route: ActivatedRoute) {
    this.qtd = 1;
  }

  ngOnInit() {
  }

  public getProduct(): JSON {
    const products: [] = JSON.parse(localStorage.getItem('products'));
    const product = products.find((val: any) => val._id == this.route.snapshot.paramMap.get('id'))
    console.log('how many times');
    
    return product;
  }


  


}