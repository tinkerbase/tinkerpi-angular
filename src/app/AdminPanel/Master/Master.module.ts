import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatListModule,
			MatIconModule,
			MatButtonModule,
			MatCardModule,
			MatInputModule,
			MatDatepickerModule,
			MatRadioModule,
			MatFormFieldModule,
			MatSelectModule,
            MatTableModule,
            MatPaginatorModule,
			MatCheckboxModule} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { mstPeopleComponent } from './mst-people/mst-people.component';	
import { mstPersonComponent } from './mst-people/mst-person/mst-person/mst-person.component';
import { mstPersonEditComponent } from './mst-people/mst-person/mst-person-edit/mst-person-edit.component';
import { mstPersonViewComponent } from './mst-people/mst-person/mst-person-view/mst-person-view.component';

import { MasterRoutes } from './Master.routing'

@NgModule({
	declarations: [mstPeopleComponent,
		mstPersonComponent,
		mstPersonEditComponent,
		mstPersonViewComponent		
	],
	imports: [
		CommonModule,
		RouterModule.forChild(MasterRoutes),
		MatListModule,
		MatButtonModule,
		MatIconModule,
		MatCardModule,
		MatInputModule,
		MatDatepickerModule,
		MatFormFieldModule,
		MatRadioModule,
		MatSelectModule,
		FormsModule,
		ReactiveFormsModule,
		MatTableModule,
		FlexLayoutModule,
        MatCheckboxModule,
        MatPaginatorModule
	]
})
export class MasterModule { }
