import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { StaffingSolutionsComponent } from './component/staffing-solutions/staffing-solutions.component';
import { PricingComponent } from './component/pricing/pricing.component';
import { ContactComponent } from './component/contact/contact.component';
import { BlogComponent } from './component/blog/blog.component';
import { BlogDetailsComponent } from './component/blog/blog-details/blog-details.component';
import { TemporaryEmploymentComponent } from './component/temporary-employment/temporary-employment.component';
import { PlacementAndFulfillmentComponent } from './component/placement-and-fulfillment/placement-and-fulfillment.component';
import { TemporaryToPermanentComponent } from './component/temporary-to-permanent/temporary-to-permanent.component';
import { DirectHiresComponent } from './component/direct-hires/direct-hires.component';
import { JobOrderComponent } from './component/job-order/job-order.component';

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
    path: 'temporary-employment',
    component: TemporaryEmploymentComponent,
  },
  {
    path: 'temporary-to-permanent',
    component: TemporaryToPermanentComponent,
  },
  {
    path: 'placement-and-fulfillment',
    component: PlacementAndFulfillmentComponent,
  },
  {
    path: 'job-order',
    component: JobOrderComponent,
  },
  {
    path: 'direct-hires',
    component: DirectHiresComponent,
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
