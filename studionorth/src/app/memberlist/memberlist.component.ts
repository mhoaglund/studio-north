import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
import { MembersService } from '../members.service';

@Component({
  selector: 'app-memberlist',
  templateUrl: './memberlist.component.html',
  styleUrls: ['./memberlist.component.css']
})
export class MemberlistComponent implements OnInit {
  _members: []
  private _membersService
  constructor(
    private members: MembersService,
    private _sanitizer: DomSanitizer,
    ) { 
    this._membersService = members;
  }

  ngOnInit() {
    this._membersService.getJSON().subscribe(data => {
      this._members = data.all;
      console.log(this._members)
    })
  }

  getPortrait(p) {
    return this._sanitizer.bypassSecurityTrustStyle(`url(assets/images/${p})`);
  }
}
