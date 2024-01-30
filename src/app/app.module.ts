import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TableComponent } from './components/table/table.component';
import { PokemonDetailComponent } from './components/pokemon-detail/pokemon-detail.component';
import { PokemonSearchPipe } from './pipes/pokemon-search.pipe';
import { PokemonPaginationPipe } from './pipes/pokemon-pagination.pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { MainComponent } from './pages/main/main.component';
import { AlphabetTableComponent } from './components/alphabet-table/alphabet-table.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TableComponent,
    PokemonDetailComponent,
    PokemonSearchPipe,
    PokemonPaginationPipe,
    MainComponent,
    AlphabetTableComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule,
    FormsModule
  ],
  providers: [PokemonSearchPipe,
    PokemonPaginationPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
