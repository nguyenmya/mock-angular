import { Component, OnInit } from '@angular/core';
import { MockService } from '../services/apiServices';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['../app.component.scss'],
})
export class HomeComponent implements OnInit {
  listData: any = [];
  indexTab: number = 0;

  constructor(public apiServices: MockService) {}

  ngOnInit(): void {
    this.apiServices.getAllData()
  }

  onSubmitForm(value: any) {
    this.apiServices.getSearchProducts(value?.search).subscribe((res) => {
      this.listData = res;
    });
  }

  onSubmitFormVintage(search: string, indexTab: number) {
    this.indexTab = indexTab;
    this.apiServices.onSubmitFormVintage(search, indexTab)
  }
}