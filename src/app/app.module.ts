import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddDirectiveDirective } from './add-directive.directive';
import { HeroProfileComponent } from './hero-profile/hero-profile.component';
import { AddBannerComponent } from './add-banner/add-banner.component';
import { HeroJobAdComponent } from './hero-job-ad/hero-job-ad.component';
import { ImageUploadComponent } from './image-upload/image-upload.component';

@NgModule({
  declarations: [
    AppComponent,
    AddDirectiveDirective,
    HeroProfileComponent,
    AddBannerComponent,
    HeroJobAdComponent,
    ImageUploadComponent
  ],
  entryComponents: [
    HeroJobAdComponent,
    HeroProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
