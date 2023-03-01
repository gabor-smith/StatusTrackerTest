import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatTableModule } from '@angular/material/table';
import { Application } from './application';
import appsJson from '../assets/versions.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  Applications: Application[] = appsJson;

  public displayedColumns: string[] = ['name', 'releasedVersion', 'releaseCandidatesVersions', 'wikiVersion', 'features'];
  public appData = new MatTableDataSource<Application>();

  constructor(){
    console.log(this.Applications);
  }

  /*ngOnInit(){
    this.getApplicationsInformation();
  }*/


}
