import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { path: 'feed', loadChildren: './feed/feed.module#FeedPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'modal', loadChildren: './modal/modal.module#ModalPageModule' },
  { path: 'page', loadChildren: './page/page.module#PagePageModule' },
  { path: 'tarapoto', loadChildren: './tarapoto/tarapoto.module#TarapotoPageModule' },
  { path: 'tarapotofull', loadChildren: './tarapotofull/tarapotofull.module#TarapotofullPageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
