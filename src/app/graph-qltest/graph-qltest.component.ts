import { Component, OnInit, AfterViewChecked} from '@angular/core';
import { MatTabChangeEvent, getMatFormFieldPlaceholderConflictError } from '@angular/material';
import { MatTableDataSource, MatPaginator} from '@angular/material';
import { ChangeDetectorRef } from '@angular/core';

import { EmbryoService } from '../Services/Embryo.service';

@Component({
  selector: 'app-graph-qltest',
  templateUrl: './graph-qltest.component.html',
  styleUrls: ['./graph-qltest.component.css']
})
export class GraphQLTestComponent implements OnInit {

  apollo: any;
  // dataSource = new MatTableDataSource<any>(this.getApollo());

  messages = [
        {
          "name": "Assembling the Tinker Pi Robot for Arduino #tt26"
        },
        {
          "name": "Assembling the Tinker Pi Robot for Microbit #tt13"
        },
        {
          "name": "Programming the Tinker Pi Robot with Microbit #tt18"
        },
        {
          "name": "Configuring Raspberry Pi After Installing Raspbian #tt2"
        },
        {
          "name": "Configuring Visual Studio Code to Sync with Raspberry Pi #tt5"
        }
  ]

  constructor(private embryoService: EmbryoService) { }

  ngOnInit() {
    this.getApollo();
  }

  public getApollo() {
    this.embryoService.getApollo().valueChanges().subscribe(res => { this.apollo = res; });
 }

}
