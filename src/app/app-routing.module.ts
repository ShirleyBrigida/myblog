import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { FooterComponent } from './footer/footer.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', redirectTo: ''},
    { path: 'cadastro', component: CadastroComponent},
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);

