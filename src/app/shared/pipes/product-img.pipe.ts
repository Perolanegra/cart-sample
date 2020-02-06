import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'productImg'
})
export class ProductImgPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    const path = 'assets/bg-img/';
    return value ? path + value.img : '';
  }

}
