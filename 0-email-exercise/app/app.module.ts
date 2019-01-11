import { DashboardComponent } from './dashboard/containers/dashboard/dashboard.component';
import { MailModule } from './mail/mail.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { DashboardModule} from './dashboard/dashboard.module';


import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

export const ROUTES: Routes = [
  { path: '', redirectTo: 'mail/(folder/inbox)', pathMatch: 'full' },
  { path: 'dashboard', redirectTo: 'dashboard' },
  { path: '**', redirectTo: 'mail/(folder/inbox)', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MailModule,
    DashboardModule,
    // for route tracing
    //RouterModule.forRoot(ROUTES, { enableTracing: true })
    RouterModule.forRoot(ROUTES)
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
