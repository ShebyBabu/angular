import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { PlaylistComponent } from './playlist/playlist.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { DeleteComponent } from './delete/delete.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  {path:'',pathMatch:'full',redirectTo:'/home'},
  {path:'home', component: HomeComponent},
  {path:'playlist', component: PlaylistComponent},
  {path:'wishlist', component: WishlistComponent},
  {path:'result/:id',component: SearchComponent},
  {path:'delete/:id',component: DeleteComponent},
  {path:'details/:id1/:id2', component: DetailsComponent}




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
