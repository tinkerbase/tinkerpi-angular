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
			MatCheckboxModule} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { mstPeopleComponent } from './mst-people.component';
import { mstPersonComponent } from './mst-person/mst-person/mst-person.component';
import { mstPersonEditComponent } from './mst-person/mst-person-edit/mst-person-edit.component';			
import { mstPersonViewComponent } from './mst-person/mst-person-view/mst-person-view.component';
import { mstPeopleRoutes} from './mst-people-routing';

@NgModule({
	declarations: [
		mstPeopleComponent,
		mstPersonComponent,
		mstPersonEditComponent,
		mstPersonViewComponent
	],
	imports: [
		CommonModule,
		RouterModule.forChild(mstPeopleRoutes),
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
		MatCheckboxModule
	]
})
export class mstPeopleModule { }
