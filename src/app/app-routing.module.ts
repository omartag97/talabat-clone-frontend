import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationFormComponent } from './Component/registration-form/registration-form.component';
import { LoginFormComponent } from './Component/login-form/login-form.component';
import { HomeComponent } from './Component/home/home.component';
import { ProfileComponent } from './Component/profile/profile.component';
import { BoardUserComponent } from './Component/board-user/board-user.component';
import { BoardAdminComponent } from './Component/board-admin/board-admin.component';
import { AddRestoComponent } from './Component/add-resto/add-resto.component';
import { UpdateRestoComponent } from './Component/update-resto/update-resto.component';
import { AllRestoComponent } from  './Component/all-resto/all-resto.component';
import { FaqsComponent } from './Component/faqs/faqs.component';
import { AddDriverComponent } from './Component/add-driver/add-driver.component';
import { FeedbackComponent } from './Component/feedback/feedback.component';
import { MenueComponent } from './Component/menue/menue.component';
import { RestaurantComponent } from './Component/restaurant/restaurant.component';
import { CheckoutComponent } from './Component/checkout/checkout.component';
import { ContactUsComponent } from './Component/contact-us/contact-us.component';
import { OrdersComponent } from './Component/orders/orders.component';
import { TrackingComponent } from './Component/tracking/tracking.component';
import { RestloginComponent } from './Component/restlogin/restlogin.component';
import { UserSummeryComponent } from './Component/user-summery/user-summery.component';
import { AddProductComponent } from './Component/add-product/add-product.component';
import { ProductEditComponent } from './Component/product-edit/product-edit.component';
import { ProductFormComponent } from './Component/product-form/product-form.component';
import { OffersComponent } from './component/offers/offers.component';

const routes: Routes = [

  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginFormComponent },
  { path: 'register', component: RegistrationFormComponent },
  { path: 'profile', component: ProfileComponent },
  //{ path: 'user', component: BoardUserComponent },
  { path: 'admin', component: BoardAdminComponent },
  { path: 'add', component: AddRestoComponent },
  { path: 'admin/update', component: UpdateRestoComponent },
  { path: 'all', component: AllRestoComponent },
  { path: 'admin/all', component: AllRestoComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'faq', component: FaqsComponent },
  { path: 'driver', component: AddDriverComponent },
  { path: 'feedback', component: FeedbackComponent },
  { path: 'menu', component: MenueComponent },
  { path: 'restaurant', component: RestaurantComponent },
  { path: 'checkout', component: CheckoutComponent } ,
  { path: 'track', component: TrackingComponent } ,
  { path: 'contactUs', component: ContactUsComponent },
  { path: 'orders', component: OrdersComponent },
  { path: 'restlogin', component: RestloginComponent },
  { path: 'user-summary', component: UserSummeryComponent },
  { path: 'rest-products', component: AddProductComponent },
  { path: 'product-edit', component: ProductEditComponent},
  { path: 'add-product', component: ProductFormComponent },
  { path: 'offers', component: OffersComponent },
  { path: '**', component: HomeComponent },





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
