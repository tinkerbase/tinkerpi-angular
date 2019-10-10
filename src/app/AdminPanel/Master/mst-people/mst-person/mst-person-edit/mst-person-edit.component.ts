import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute, Params }   from '@angular/router';
import { FormControl, FormGroup, FormBuilder,FormArray, Validators } from '@angular/forms';
import { ToastaService, ToastaConfig, ToastOptions, ToastData} from 'ngx-toasta';
import { Apollo, QueryRef } from 'apollo-angular';
import { MatTableDataSource, MatPaginator} from '@angular/material';
import gql from 'graphql-tag';

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
  selector: 'app-mst-person-edit',
  templateUrl: './mst-person-edit.component.html',
  styleUrls: ['./mst-person-edit.component.scss']
})

export class mstPersonEditComponent implements OnInit {

   info         : FormGroup;
   address      : FormGroup;
   card         : FormGroup;
   emailPattern : any = /\S+@\S+\.\S+/;
   toastOption  : ToastOptions = {
      title     : "Edit Person",
      msg       : "Your data has been updated successfully!",
      showClose : true,
      timeout   : 3000,
      theme     : "material"
   };

   mstPersonUpdate: any [] = [];

   private query: QueryRef<any>;

   @ViewChild(MatPaginator, { static: false } ) paginator: MatPaginator;

   dataSource = new MatTableDataSource<any>(this.mstPersonUpdate);

   constructor(private route: ActivatedRoute,
               private router: Router,
               private formGroup : FormBuilder,
               private toastyService: ToastaService,
               private graphql: Apollo) {

   }

   ngOnInit() {
      this.info = this.formGroup.group({
         first_name   : ['', [Validators.required]],
         last_name    : ['', [Validators.required]]
      });

      this.query = this.graphql.watchQuery({
        query: QUERY
      });
    
      this.query.valueChanges.subscribe(result => {
        this.mstPersonUpdate = result.data.mstPeopleList;
        this.dataSource = new MatTableDataSource<any>(this.mstPersonUpdate);
        console.log("hello!  here i am!");
        console.log(this.dataSource.filteredData);
        setTimeout(() => {
           this.dataSource.paginator = this.paginator;
        }, 0 );
        console.log(this.dataSource);
      });
   }

   submitPerson() {
      if(this.info.valid){
         this.router.navigate(['/admin-panel/master/person/view']).then(()=>{
           this.toastyService.success(this.toastOption);
         });
      } else {
         for (let i in this.info.controls) {
            this.info.controls[i].markAsTouched();
         }
      }
   }
}
