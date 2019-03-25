import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
import { MembersService } from '../members.service';

@Component({
  selector: 'app-alumnilist',
  templateUrl: './alumnilist.component.html',
  styleUrls: ['./alumnilist.component.css']
})
export class AlumnilistComponent implements OnInit {
  _alum: []
  private _membersService
  constructor(
    private members: MembersService,
    private _sanitizer: DomSanitizer,
    ) { 
    this._membersService = members;
  }

  ngOnInit() {
    this._membersService.getJSON().subscribe(data => {
      this._alum = data.all; //TODO filter
      console.log(this._alum)
    })
  }

  getPortrait(p) {
    return this._sanitizer.bypassSecurityTrustStyle(`url(assets/images/${p})`);
  }
}
