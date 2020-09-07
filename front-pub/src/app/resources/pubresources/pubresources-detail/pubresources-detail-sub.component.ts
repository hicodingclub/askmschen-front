import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import {
  Location
} from '@angular/common';
import {
  Router,
  ActivatedRoute
} from '@angular/router';
import {
  Injector
} from '@angular/core';
import {
  PubresourcesDetailComponent
} from './pubresources-detail.component';
import {
  PubresourcesService
} from '../pubresources.service';
@Component({
  selector: 'app-pubresources-detail-sub',
  templateUrl: './pubresources-detail-sub.component.html',
  styleUrls: ['./pubresources-detail.component.css', './pubresources-detail-sub.component.css']
})
export class PubresourcesDetailSubComponent extends PubresourcesDetailComponent
implements OnInit {
  // @Input() inputData;
  constructor(public pubresourcesService: PubresourcesService, public injector: Injector, public router: Router, public route: ActivatedRoute, public location: Location) {
    super(pubresourcesService, injector, router, route, location);
  }
  ngOnInit() {
    if (!this.id) this.id = this.inputData;
    if (this.id) this.populateDetail(this.id);
    else console.error("Routing error for detail sub view... no id...");
  }
  ngAfterViewInit() {}
}