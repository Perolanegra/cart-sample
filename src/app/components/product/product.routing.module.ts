import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ProductDetailsComponent } from './product-details/product-details.component';



const routes: Routes = [
    { path: '', redirectTo: 'product-details', pathMatch: 'full' },
    {
        path:'product-details/:id',
        component: ProductDetailsComponent,
        runGuardsAndResolvers: 'always'
    }
]
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    
})

export class ProductRoutingModule { }