import { AuthGuard } from './auth/auth.guard';
import { AuthModule } from './auth/auth.module';
import { MailModule } from './mail/mail.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes, PreloadAllModules, PreloadingStrategy, Route } from '@angular/router';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { FileSizePipe } from './testing/file-size.pipe';

export const ROUTES: Routes = [
  // add preload: true to preload the module
  { path: 'dashboard', canLoad: [AuthGuard], data: { preload: true }, loadChildren: './dashboard/dashboard.module#DashboardModule' },
  { path: '**', redirectTo: 'mail/folder/inbox' }
];


export class CustomPreload implements PreloadingStrategy {

  preload(route: Route,  fn: () => Observable<any>): Observable<any> {
    return route.data && route.data.preload ? fn() : of(null);
  }
}

@NgModule({
  declarations: [
    AppComponent,
    FileSizePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MailModule,
    AuthModule,
    // for route tracing
    //RouterModule.forRoot(ROUTES, { enableTracing: true })
    // use the preloadingStrategy PreloadAllModules for preloading all modules
    RouterModule.forRoot(ROUTES, { preloadingStrategy: CustomPreload})
  ],
  providers: [
    CustomPreload
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
 