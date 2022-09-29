import { Component, OnInit } from '@angular/core';
import { MockService } from '../services/apiServices';

@Component({
  selector: 'app-headerr',
  templateUrl: './headerr.component.html',
  styleUrls: ['./headerr.component.scss']
})
export class HeaderrComponent implements OnInit {

  constructor(private apiServices: MockService){ }
  listData: any= [];

  ngOnInit(): void {
  }
  onSubmitForm(value:any){
    this.apiServices.getSearchProducts(value).subscribe((res)=>{
        console.log("ress", res)
        this.listData = res;
        console.log(this.listData)
    })
}

}
