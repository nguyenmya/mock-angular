import { Component ,OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular';
  
  ngOnInit(): void {
    console.log("aaaa")
    // this.apiServices.getAllProducts().subscribe((res)=>{
    //     console.log("ress", res)

    // })

}
}
