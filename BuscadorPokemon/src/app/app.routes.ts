import { Routes } from '@angular/router'
import { RegistroUsuarioComponent } from './components/registro-usuario/registro-usuario.component';
import { BuscadorPokemonComponent } from './components/buscador-pokemon/buscador-pokemon.component';
import {CharmanderComponent} from './components/pokemon/charmander/charmander.component';
import {MewComponent} from './components/pokemon/mew/mew.component';
import {PikachuComponent} from './components/pokemon/pikachu/pikachu.component';
import {SeelComponent} from './components/pokemon/seel/seel.component';
import {SnorlaxComponent} from './components/pokemon/snorlax/snorlax.component';
import {SpectreComponent} from './components/pokemon/spectre/spectre.component';
import {PokemonDetallesComponent} from './components/pokemon-detalles/pokemon-detalles.component';
import {PokemonListaComponent} from './components/pokemon-lista/pokemon-lista.component';

export const routes: Routes = [

    { path: '', redirectTo: 'registro', pathMatch: 'full'},
    { path: 'registro', component: RegistroUsuarioComponent},
    { path: 'buscador', component: BuscadorPokemonComponent},
    { path: 'charmander', component: CharmanderComponent },
    { path: 'mew', component: MewComponent },
    { path: 'pikachu', component: PikachuComponent },
    { path: 'seel', component: SeelComponent },
    { path: 'snorlax', component: SnorlaxComponent },
    { path: 'spectre', component: SpectreComponent },
    { path: 'pokemon-lista', component: PokemonListaComponent },
    { path: 'pokemon/:name', component: PokemonDetallesComponent },
    { path: '**', redirectTo: 'registro'}
];