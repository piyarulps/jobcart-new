import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { StaffingSolutionsComponent } from './component/staffing-solutions/staffing-solutions.component';
import { PricingComponent } from './component/pricing/pricing.component';
import { ContactComponent } from './component/contact/contact.component';
import { BlogComponent } from './component/blog/blog.component';
import { BlogDetailsComponent } from './component/blog/blog-details/blog-details.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'staffing-solutions',
    component: StaffingSolutionsComponent,
  },
  {
    path: 'pricing',
    component: PricingComponent,
  },
  {
    path: 'contact-us',
    component: ContactComponent,
  },
  {
    path: 'blog',
    component: BlogComponent,
  },
  {
    path: 'blog/:id',
    component: BlogDetailsComponent,
  },
  {
    path: '**',
    component: HomeComponent,
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
