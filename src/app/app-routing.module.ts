import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableComponent } from './components/table/table.component';
import { PokemonDetailComponent } from './components/pokemon-detail/pokemon-detail.component';
import { MainComponent } from './pages/main/main.component';
const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'pokemon/:id', component: PokemonDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

