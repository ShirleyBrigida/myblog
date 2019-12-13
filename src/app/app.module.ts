import { routing } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID, ɵLOCALE_DATA } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuModule } from './menu/menu.module';
import { CadastroComponent } from './cadastro/cadastro.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { PostService } from './post.service';
import { PostDetalheComponent } from './post-detalhe/post-detalhe.component';
import { HomeModule } from './home/home.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';
import { FooterComponent } from './footer/footer.component';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';

registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    CadastroComponent,
    PostDetalheComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MenuModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    HomeModule,
    routing,
    HttpClientModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatSnackBarModule
  ],
  providers: [PostService,
             {provide: LOCALE_ID, useValue: 'pt-BR'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
