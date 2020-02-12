import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModelViewerComponent } from './components/model-viewer/model-viewer.component';
import { ModelListComponent } from './components/model-list/model-list.component';
import { AdvancedModelViewerComponent } from './components/advanced-model-viewer/advanced-model-viewer.component';

@NgModule({
  declarations: [
    AppComponent,
    ModelViewerComponent,
    ModelListComponent,
    AdvancedModelViewerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
