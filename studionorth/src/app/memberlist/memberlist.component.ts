import { Component, OnInit } from '@angular/core';
import { MembersService } from '../members.service';

@Component({
  selector: 'app-memberlist',
  templateUrl: './memberlist.component.html',
  styleUrls: ['./memberlist.component.css']
})
export class MemberlistComponent implements OnInit {
  _members: []
  private _membersService
  constructor(private members: MembersService) { 
    this._membersService = members;
  }

  ngOnInit() {
    this._membersService.getJSON().subscribe(data => {
      this._members = data.all;
      console.log(this._members)
    })
  }

}
