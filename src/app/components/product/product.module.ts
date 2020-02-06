import { NgModule } from '@angular/core';
import { ProductRoutingModule } from './product.routing.module';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { ProductPricePipe } from 'src/app/shared/pipes/product-price.pipe';
import { ProductImgPipe } from 'src/app/shared/pipes/product-img.pipe';
import { ProductNamePipe } from 'src/app/shared/pipes/product-name.pipe';
import { ProductDescriptPipe } from 'src/app/shared/pipes/product-descript.pipe';


@NgModule({
    imports: [
        ProductRoutingModule,
        MaterialModule
    ],
    declarations: [
       ProductDetailsComponent,
       ProductPricePipe,
       ProductImgPipe,
       ProductNamePipe,
       ProductDescriptPipe
    ],
    providers: [
       
    ],
    entryComponents: [
    ],
    
})

export class ProductModule { }