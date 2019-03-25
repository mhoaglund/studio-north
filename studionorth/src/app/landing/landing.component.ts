import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
import { StatusServiceService } from '../status-service.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  _status = {}
  private _statusService
  constructor(
    private status: StatusServiceService,
    private _sanitizer: DomSanitizer,
  ) { 
    this._statusService = status;
  }
  
  ngOnInit() {
    this._statusService.getJSON().subscribe(data => {
      this._status = data;
      console.log(this._status)
    })
  }

  getImage(p) {
    return this._sanitizer.bypassSecurityTrustStyle(`url(assets/images/${p})`);
  }
}
