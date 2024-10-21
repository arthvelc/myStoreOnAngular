import { Routes } from '@angular/router';
import { ListComponent } from './domains/products/pages/list/list.component';
import { AboutComponent } from './domains/info/pages/about/about.component';
import { NotFoundComponent } from '@info/pages/not-found/not-found.component';
import { LayoutComponent } from '@shared/layout/layout.component';
import { ProductDetailComponent } from '@products/pages/product-detail/product-detail.component';

export const routes: Routes = [
    {
        path:'',
        component: LayoutComponent,
        children: [
            {
                path: '',
                component: ListComponent
            },
            {
                path: 'about',
                component: AboutComponent
            },
            {
                path: 'product/:productId',
                component: ProductDetailComponent
            },
            {
                path: '**',
                component: NotFoundComponent,
            }
        ]
    },
    
];
