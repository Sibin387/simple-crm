import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { DataService } from '../services/data.service';

export interface UserData {
  '_id': string;
  'name': string;
  'email': string;
  'note': string;
  'phone': string;
  'status': string;
}

/** Constants used to fill up our data base. */
const COLORS: string[] = [
  'maroon', 'red', 'orange', 'yellow', 'olive', 'green', 'purple', 'fuchsia', 'lime', 'teal',
  'aqua', 'blue', 'navy', 'black', 'gray'
];
const NAMES: string[] = [
  'Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack', 'Charlotte', 'Theodore', 'Isla', 'Oliver',
  'Isabella', 'Jasper', 'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'
];

@Component({
  selector: 'app-enquiries',
  templateUrl: './enquiries.component.html',
  styleUrls: ['./enquiries.component.css']
})
export class EnquiriesComponent implements OnInit {
  displayedColumns: string[] = ['_id', 'name', 'email', 'note', 'phone', 'status'];
  dataSource: MatTableDataSource<UserData>;
  filterValue: string="";
  total=0;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  
  constructor(private dataService: DataService) {
    // Create 100 users
    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource([]);
  }

  ngOnInit() {
    this.paginator.pageSize=5;
    this.dataSource.sort = this.sort;
    this.search();
  }
  changePage(event:any){
    this.search();
  }
  search(){
    this.dataService.searchEnquiry(this.filterValue, this.paginator.pageIndex, this.paginator.pageSize)
    .subscribe((d:any)=>{
      console.log(d);
      this.total = d.total;
      this.dataSource = new MatTableDataSource(d.data);
    })
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.filterValue = filterValue;
    this.search();
    // this.dataSource.filter = filterValue.trim().toLowerCase();

    // if (this.dataSource.paginator) {
    //   this.dataSource.paginator.firstPage();
    // }
  }
}
/** Builds and returns a new User. */
// function createNewUser(id: number): UserData {
//   const name = NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
//       NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';

//   return {
//     id: id.toString(),
//     name: name,
//     progress: Math.round(Math.random() * 100).toString(),
//     color: COLORS[Math.round(Math.random() * (COLORS.length - 1))]
//   };
// }
