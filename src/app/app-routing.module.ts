import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { DatospuebloComponent } from './datospueblo/datospueblo.component';
import { PueblosComponent } from './pueblos/pueblos.component';


const routes: Routes = [
  { path: 'buscarpueblo', component : PueblosComponent },
  { path: 'datospueblo/:codigopueblo', component: DatospuebloComponent },
  { path: '', redirectTo: '/buscarpueblo', pathMatch: 'full' },
  { path: '**', redirectTo: '/buscarpueblo', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
