import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-clients',
  templateUrl: './show-clients.component.html',
  styleUrls: ['./show-clients.component.css']
})
export class ShowClientsComponent implements OnInit {

  constructor(private service: SharedService) { }

  ClientsList: any=[];

  ngOnInit(): void {
    this.refreshClList();
    console.log(this.ClientsList);
  }

  refreshClList(){
    this.service.getClList().subscribe(
      data => {
        this.ClientsList = data;
      }
    );
  }

}
