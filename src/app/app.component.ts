import { Component } from '@angular/core';
import { AppServiceService } from './app-service.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AppServiceService],
})
export class AppComponent {
  name = 'Angular';
  location = 'chennai';
  age = 32;
  binddata: string;
  userDetails: any;

  constructor(private appService: AppServiceService) {}
  receivedData(event) {
    //  this.binddata = event;
    this.binddata = this.appService.data;
    this.appService.getData().subscribe((res: any) => {
      console.log(res);
      this.userDetails = res.data;
    },
    (error) => 
    );
  }
}
