import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Application } from './application';
import { Sort } from '@angular/material/sort';
import appsJson from '../assets/versions.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  Applications: Application[] = appsJson;

  sortedData: Application[];

  public displayedColumns: string[] = ['name', 'releasedVersion', 'releaseCandidatesVersions', 'tagsVersions', 'wikiVersion', 'features', 'compatibilities'];
  public appData = new MatTableDataSource<Application>();

  constructor(){
    console.log(this.Applications);
    this.sortedData = this.Applications.slice();
  }

  sortData(sort: Sort){
    const data = this.Applications.slice();
    if(!sort.active || sort.direction === ''){
      this.sortedData = data;
      return;
    }

    this.sortedData = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active){
        case 'name':
          return compare(a.name, b.name, isAsc);
        default:
          return 0;
      }
    });
  }



  /*ngOnInit(){
    this.getApplicationsInformation();
  }*/


}

function compare(a: number | string, b: number | string, isAsc: boolean){
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
