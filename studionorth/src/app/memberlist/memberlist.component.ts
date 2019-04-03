import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
import { MembersService } from '../members.service';
import { StatusServiceService } from '../status-service.service';

@Component({
  selector: 'app-memberlist',
  templateUrl: './memberlist.component.html',
  styleUrls: ['./memberlist.component.css']
})
export class MemberlistComponent implements OnInit {
  _members: []
  _status: {}
  _vacancies: boolean;
  private _membersService
  private _statusService
  constructor(
    private members: MembersService,
    private status: StatusServiceService,
    private _sanitizer: DomSanitizer,
    ) { 
    this._membersService = members;
    this._statusService = status;
    this._vacancies = false;
  }

  ngOnInit() {
    console.log("oninit fired")
    this._membersService.getJSON().subscribe(data => {
      this._members = data.all;
      console.log(this._members)
    })
    this._statusService.getJSON().subscribe(data => {
      this._status = data;
      console.log("STATUS: ", this._status)
      this._vacancies = ((this._status["stalls"].length - this._members.length) > 0 ) ? true : false;
      console.log(this._vacancies);
    })


  }

  getPortrait(p) {
    return this._sanitizer.bypassSecurityTrustStyle(`url(assets/images/${p})`);
  }
}
