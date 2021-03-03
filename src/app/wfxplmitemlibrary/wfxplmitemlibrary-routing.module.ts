import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WfxItemLibraryComponent } from './components/wfx-item-library/wfx-item-library.component';
import { DemoComponent } from './components/demo/demo.component';
import { AddBuyerComponent } from './components/add-buyer/add-buyer.component';

const routes: Routes = [
  {
    path : '' , component: WfxItemLibraryComponent,
  },
  {
    path : 'itemlibrary' , component: WfxItemLibraryComponent,
  }
  ,
  {
    path : 'wfxDemo' , component: DemoComponent,
  },
  {
    path : 'wfxaddBuyer' , component: AddBuyerComponent,
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WfxPlmItemLibraryRoutingModule { }
