import { Routes } from '@angular/router';
import { mstPeopleComponent } from './mst-people.component';
import { mstPersonComponent } from './mst-person/mst-person/mst-person.component';
import { mstPersonEditComponent } from './mst-person/mst-person-edit/mst-person-edit.component';
import { mstPersonViewComponent } from './mst-person/mst-person-view/mst-person-view.component';

export const mstPeopleRoutes: Routes = [
   {
      path     : '',
      component : mstPeopleComponent,
   },
   {
      path      : 'person',
		component : mstPersonComponent,
		children: [ 
         {
            path: 'edit',
            component: mstPersonEditComponent
         },
         { 
            path: 'view', 
            component: mstPersonViewComponent 
         },
      ]
	}
];
