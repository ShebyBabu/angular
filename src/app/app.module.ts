import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MatButtonModule, MatCardModule, MatInputModule, MatListModule, MatToolbarModule, _MatCheckboxRequiredValidatorModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { HttpClientModule }    from '@angular/common/http';
import {FormsModule}  from '@angular/forms';
import { PlaylistComponent } from './playlist/playlist.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { WishlistComponent } from './wishlist/wishlist.component';
import { DetailsComponent } from './details/details.component';
import { DeleteComponent } from './delete/delete.component';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    SearchComponent,
    PlaylistComponent,
    WishlistComponent,
    DetailsComponent,
    DeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  MaterialModule,
  HttpClientModule,
  FormsModule,
  FlexLayoutModule,
  BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
