import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppOverviewComponent } from './app-overview/app-overview.component';
import { ActiveDirective } from './active.directive';

@NgModule({
  declarations: [
    AppComponent,
    AppOverviewComponent,
    ActiveDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
