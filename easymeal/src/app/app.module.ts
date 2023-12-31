import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SharedModule } from './shared/shared.module';


import { HttpClientModule } from '@angular/common/http';
import { UserModule } from './user/user.module';
import { CoreModule } from './core/core.module';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { MainComponent } from './main/main.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { appInterceptorProvider } from './app.interceptor';
import { CatalogComponent } from './catalog/catalog.component';
import { DetailsComponent } from './details/details.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CreateComponent } from './recipe/create/create.component';
import { AuthComponent } from './auth/auth.component';
import { RecipeModule } from './recipe/recipe.module';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HomeComponent,
    CatalogComponent,
    DetailsComponent,
    NotFoundComponent,
    //CreateComponent,
    AuthComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CoreModule,
   // RouterModule,
    UserModule,
    SharedModule,
    RecipeModule,
  ],
  providers: [
    appInterceptorProvider,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
