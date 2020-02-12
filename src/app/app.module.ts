import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/header/header.component";
import { EmployeeListComponent } from "./employee-list/employee-list.component";
import { EmployeeDetailComponent } from "./employee-detail/employee-detail.component";
import { EmployeeService } from "./employee.service";
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EmployeeListComponent,
    EmployeeDetailComponent,
    AboutComponent,
    HomeComponent,
    
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule {}
