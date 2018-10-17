
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from "./products/product-list.component";
import { CreateProductComponent } from "./create-product/create-product.component";

export const appRouter: Routes = [
    {
        path: '',
        component: ProductListComponent
    },
    {
        path: 'list',
        component: ProductListComponent
    },
    {
        path: 'create',
        component: CreateProductComponent
    },

];