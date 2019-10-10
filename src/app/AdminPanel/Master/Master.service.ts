import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/Rx';
import * as screenfull from 'screenfull';
import { MatDialogRef, MatDialog } from '@angular/material';
import { DeleteListDialogComponent} from '../Widget/PopUp/DeleteListDialog/DeleteListDialog.component';
import { SeeListDialogComponent } from '../Widget/PopUp/SeeListDialog/SeeListDialog.component';
import { AddNewUserComponent } from '../Widget/PopUp/AddNewUser/AddNewUser.component';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from "@angular/fire/database";

@Injectable({
  providedIn: 'root'
})

export class MasterService {

	sidenavOpen 	 : boolean = true;
	sidenavMode 	 : string = "side";
	chatSideBarOpen : boolean = true;
	editProductData : any;
	products  : AngularFireObject<any>;

	constructor(private http:HttpClient,
					private dialog: MatDialog,
					private db: AngularFireDatabase) { }

	//seeList function is used to open the see Dialog Component.
	public editPerson(){
		let dialogRef : MatDialogRef<SeeListDialogComponent>;
		dialogRef = this.dialog.open(SeeListDialogComponent);
	}	

	
}
