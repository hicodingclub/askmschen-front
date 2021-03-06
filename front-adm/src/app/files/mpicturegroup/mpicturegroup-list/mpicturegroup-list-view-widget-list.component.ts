import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
import {
  MpicturegroupListViewComponent
} from './mpicturegroup-list-view.component';
@Component({
  selector: 'app-mpicturegroup-list-view-widget-list',
  animations: [
    trigger('inOutAnimation',
      [
        transition(':enter',
          [
            style({
              opacity: 0
            }),
            animate('1s ease-out', style({
              opacity: 1
            }))
          ]),
        transition(':leave',
          [
            style({
              opacity: 1
            }),
            animate('0.5s ease-in', style({
              opacity: 0
            }))
          ])
      ])
  ],
  templateUrl: './mpicturegroup-list-view-widget-list.component.html',
  styleUrls: ['./mpicturegroup-list-view-widget-list.component.css'],
})
export class MpicturegroupListViewWidgetListComponent extends MpicturegroupListViewComponent implements OnInit {
  constructor() {
    super();
  }
  ngOnInit() {
    super.ngOnInit();
  }
}