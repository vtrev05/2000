import { NavigationComponent } from './core/components/navigation/navigation.component';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TextComponent } from './shared/components/text-component/text.component';
import { VimeModule } from '@vime/angular';
import { VideoComponent } from './shared/components/video-component/video.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    TextComponent,
    VideoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    VimeModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
