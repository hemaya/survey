import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { QuestComponent } from './quest/quest.component';
import { AppComponent } from './app.component';
import { NotAuthComponent } from './notAuth/notAuth.component';




export const routes: Routes = [

    {
      path: ':email/:caseno',
      redirectTo:'quest/:email/:caseno',
      pathMatch: 'full',
    },
    {
        component:QuestComponent,
        path:'quest/:email/:caseno'
    },
  
    {
      path: '404',
      component: NotAuthComponent,
      data: {
        number: '4'
      }
    },

]
@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
  })
  export class AppRoutingModule {}