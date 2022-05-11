import {Component, Input, OnInit} from '@angular/core';
import {Comment} from '../item/item.component';

@Component({
  selector: 'app-node',
  templateUrl: './node.component.html',
  styleUrls: ['./node.component.css']
})
export class NodeComponent implements OnInit {
 // @Input() someObj = [];
 // @Input() tests  = [];
  // tslint:disable-next-line:variable-name
  @Input() comments: Comment[] | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
