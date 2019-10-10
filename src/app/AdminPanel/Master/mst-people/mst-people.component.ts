import { Component, OnInit, ViewChild } from '@angular/core';
import { Apollo, QueryRef } from 'apollo-angular';
import gql from 'graphql-tag';
import { Router } from '@angular/router';

import { AdminPanelServiceService } from '../../Service/AdminPanelService.service';
import { MasterService } from '../Master.service';
import { MatTableDataSource, MatPaginator} from '@angular/material';


const QUERY = gql`
{
  mstPeopleList
  {
    firstName
    lastName
  }
}
`;

@Component({
  selector: 'app-mst-people',
  templateUrl: './mst-people.component.html',
  styleUrls: ['./mst-people.component.scss']
})

export class mstPeopleComponent implements OnInit {

   popUpDeleteUserResponse: any;
   mstPeopleList: any [] = [];

   private query: QueryRef<any>;

   @ViewChild(MatPaginator, { static: false } ) paginator: MatPaginator;

   dataSource = new MatTableDataSource<any>(this.mstPeopleList);

   displayedColumns: string[] = ['firstName', 'lastName', 'action'];

   constructor(public service: AdminPanelServiceService, public mservice: MasterService, private router : Router, private graphql: Apollo ) { }

   ngOnInit() {

    this.query = this.graphql.watchQuery({
      query: QUERY
    });

    this.query.valueChanges.subscribe(result => {
      this.mstPeopleList = result.data.mstPeopleList;
      this.dataSource = new MatTableDataSource<any>(this.mstPeopleList);
      console.log(this.dataSource.filteredData);
      setTimeout(() => {
         this.dataSource.paginator = this.paginator;
      }, 0 );
      console.log(this.dataSource);
    });
     // console.log('hello lory');
     // this.service.getMstPeopleContent().valueChanges().subscribe(res => this.getMstPeopleData(res));
     // this.graphql.getPeople();
     // console.log('done');

   }


   /** 
     *onDelete method is used to open a delete dialog.
     */
   onDelete(i){
      this.service.deleteDialog('Are you sure you want to delete this person permanently?').
         subscribe( res => { this.popUpDeleteUserResponse = res; },
                    err => console.log(err),
                    ()  => this.getDeleteResponse(this.popUpDeleteUserResponse, i ));
   }

   /**
     * getDeleteResponse method is used to delete a invoice from the invoice list.
     */
   getDeleteResponse( response: string, i ) {
      if (response === 'yes') {
         this.dataSource.data.splice(i, 1 );
         this.dataSource = new MatTableDataSource(this.dataSource.data);
         this.dataSource.paginator = this.paginator;
      }
   }

   onEditPerson(data){
		this.router.navigate(['/admin-panel/master/person/edit']);
	}

   // applyFilter function can be set which takes a data object and filter string and returns true if the data object is considered a match.
   applyFilter(filterValue: string) {
      this.dataSource.filter = filterValue.trim().toLowerCase();

      if (this.dataSource.paginator) {
         this.dataSource.paginator.firstPage();
      }
   }
}
