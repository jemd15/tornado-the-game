import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AccountComponent } from './pages/account/account.component';
import { LoginComponent } from './pages/login/login.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { NewGameComponent } from './pages/new-game/new-game.component';
import { PlayingGameComponent } from './pages/playing-game/playing-game.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, pathMatch: 'full' },
  { path: 'account', component: AccountComponent, pathMatch: 'full' },
  { path: 'login', component: LoginComponent, pathMatch: 'full' },
  { path: 'sign-up', component: SignUpComponent, pathMatch: 'full' },
  { path: 'new-game', component: NewGameComponent, pathMatch: 'full' },
  { path: 'playing-game/:gameId', component: PlayingGameComponent, pathMatch: 'full' }
];
