import { Routes } from '@angular/router';
import { mstPeopleComponent } from './mst-people/mst-people.component';
import { mstPersonComponent } from './mst-people/mst-person/mst-person/mst-person.component';
import { mstPersonEditComponent } from './mst-people/mst-person/mst-person-edit/mst-person-edit.component';
import { mstPersonViewComponent } from './mst-people/mst-person/mst-person-view/mst-person-view.component';

export const MasterRoutes: Routes = [
    {
        path      : '',
        redirectTo : 'people'
    },
    {
        path      : 'people',
        component : mstPeopleComponent
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
         }
      ]
	},
    {
       path: '*',
       redirectTo: 'master-not-found'
    }
];
