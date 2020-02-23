import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '@angular/cdk/layout';
import { PueblosComponent } from './pueblos/pueblos.component';
import { BuscarPueblosService } from './buscar-pueblos.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CardPuebloComponent } from './card-pueblo/card-pueblo.component';
import { DatospuebloComponent } from './datospueblo/datospueblo.component';
import { CardDiaComponent } from './card-dia/card-dia.component';


@NgModule({
  declarations: [
    AppComponent,
    PueblosComponent,
    CardPuebloComponent,
    DatospuebloComponent,
    CardDiaComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    CommonModule,
    NgbModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    LayoutModule,
  ],
  providers: [BuscarPueblosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
