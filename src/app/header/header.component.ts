import { Component, OnInit } from '@angular/core';
import { MockService } from '../services/apiServices';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private apiServices: MockService) { }

  listData: any = [];
  ngOnInit(): void {
  }
  onSubmitForm(value: any) {
        this.apiServices.onSubmitForm(value)
  }
}
