
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MemberlistComponent } from './memberlist/memberlist.component';
import { AlumnilistComponent } from './alumnilist/alumnilist.component';
import { AvailabilityComponent } from './availability/availability.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { LandingComponent } from './landing/landing.component';
import { FloorplanComponent } from './floorplan/floorplan.component';

@NgModule({
  declarations: [
    AppComponent,
    MemberlistComponent,
    AlumnilistComponent,
    AvailabilityComponent,
    MenuComponent,
    FooterComponent,
    HomeComponent,
    LandingComponent,
    FloorplanComponent
  ],
  imports: [
    HttpModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
