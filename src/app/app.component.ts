import {
  Component,
  OnInit
} from '@angular/core';
import {
  CoreDataService
} from './CoreData.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  radarData;
  lat: any = 55.864;
  lon: any = -4.252;
  constructor(public dataService: CoreDataService) {
    this.getData();
  }

  getData() {
    this.dataService
      .getData(this.lat, this.lon)
      .subscribe((data) => {
        console.log(data);
        this.radarData = data;
      });
  }

}
