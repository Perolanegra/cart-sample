import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'productDescript'
})
export class ProductDescriptPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value ? value.descript : '';
  }

}
