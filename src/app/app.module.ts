import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { LoginFormComponent } from './Component/login-form/login-form.component';
import { RegistrationFormComponent } from './Component/registration-form/registration-form.component';
import { ProfileComponent } from './Component/profile/profile.component';
import { BoardAdminComponent } from './Component/board-admin/board-admin.component';
import { BoardUserComponent } from './Component/board-user/board-user.component';
import { HomeComponent } from './Component/home/home.component';
import { AddRestoComponent } from './Component/add-resto/add-resto.component';
import { UpdateRestoComponent } from './Component/update-resto/update-resto.component';
import { AllRestoComponent } from './Component/all-resto/all-resto.component';
import { AddDriverComponent } from './Component/add-driver/add-driver.component';
import { FaqsComponent } from './Component/faqs/faqs.component';
import { FeedbackComponent } from './Component/feedback/feedback.component';
import { FooterComponent } from './Component/footer/footer.component';
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
import { AgmCoreModule } from '@agm/core';
import { NaavBarComponent } from './Component/naav-bar/naav-bar.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    RegistrationFormComponent,
    ProfileComponent,
    BoardAdminComponent,
    BoardUserComponent,
    HomeComponent,
    AddRestoComponent,
    UpdateRestoComponent,
    AllRestoComponent,
    AddDriverComponent,
    FaqsComponent,
    FeedbackComponent,
    FooterComponent,
    MenueComponent,
    RestaurantComponent,
    CheckoutComponent,
    ContactUsComponent,
    OrdersComponent,
    TrackingComponent,
    RestloginComponent,
    UserSummeryComponent,
    AddProductComponent,
    ProductEditComponent,
    ProductFormComponent,
    NaavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyD_kOcDJsWVrZ_S2aze1gR6N64C4p0SpuI',
      libraries: ['places']
    })

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
