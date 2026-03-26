import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CalculatorComponent } from './calculator/calculator.component';
import { HomeComponent } from './home/home.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { CircleComponent } from './circle/circle.component';
import { DirectivesComponent } from './directives/directives.component';
import { EventRegistrationComponent } from './event-registration/event-registration.component';
import { BmiCalculatorComponent } from './bmi-calculator/bmi-calculator.component';
import { EmployeeComponent } from './employee/employee.component';
import { FlipkartComponent } from './flipkart/flipkart.component';
import { HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { AccountsComponent } from './accounts/accounts.component';
import { PrettyComponent } from './pretty/pretty.component';
import { MailComponent } from './mail/mail.component';
import { PricePipe } from './price.pipe';
import { RolePipe } from './role.pipe';
import { HighlightDirective } from './highlight.directive';
import { CapitalDirective } from './capital.directive';
import { WeatherComponent } from './weather/weather.component';
import { NaukariComponent } from './naukari/naukari.component';
import { ContactModule } from './contact/contact.module';
import { Vehicle2Component } from './vehicle2/vehicle2.component';
import { StudentsComponent } from './students/students.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { CreateVehicleComponent } from './create-vehicle/create-vehicle.component';
import { AllpracticeComponent } from './allpractice/allpractice.component';
import { ViewVehicleComponent } from './view-vehicle/view-vehicle.component';
import { ViewStudentComponent } from './view-student/view-student.component';
import { CreatStudentComponent } from './creat-student/creat-student.component';
import { ViewAccountsComponent } from './view-accounts/view-accounts.component';
import { CreateAccountsComponent } from './create-accounts/create-accounts.component';
import { TokenInterceptor } from './token.interceptor';
import { RectangleComponent } from './rectangle/rectangle.component';
import { FormComponent } from './form/form.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { RatingComponent } from './rating/rating.component';
import { TextareaComponent } from './textarea/textarea.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    CalculatorComponent,
    HomeComponent,
    DataBindingComponent,
    CircleComponent,
    DirectivesComponent,
    EventRegistrationComponent,
    BmiCalculatorComponent,
    EmployeeComponent,
    FlipkartComponent,
    VehiclesComponent,
    AccountsComponent,
    PrettyComponent,
    MailComponent,
    PricePipe,
    RolePipe,
    HighlightDirective,
    CapitalDirective,
    WeatherComponent,
    NaukariComponent,
    Vehicle2Component,
    StudentsComponent,
    CreateUserComponent,
    CreateVehicleComponent,
    ViewVehicleComponent,
    ViewStudentComponent,
    CreatStudentComponent,
    ViewAccountsComponent,
    CreateAccountsComponent,
    AllpracticeComponent,
    RectangleComponent,
    FormComponent,
    ParentComponent,
    ChildComponent,
    RatingComponent,
    TextareaComponent
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ContactModule,
    ReactiveFormsModule
    
    
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass:TokenInterceptor,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
