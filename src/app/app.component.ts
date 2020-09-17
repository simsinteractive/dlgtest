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
  title = 'dlgapp';
  constructor(public dataService: CoreDataService) {
    this.getData();
  }

  getData() {
    this.dataService
      .getData()
      .subscribe((data) => {
        console.log(data);
      });
  }

}
