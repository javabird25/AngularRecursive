import {Component, Input, OnInit, EventEmitter,  Output} from '@angular/core';
import {Comment, Org} from '../item/item.component';


@Component({
  selector: 'app-node',
  templateUrl: './node.component.html',
  styleUrls: ['./node.component.css']
})
export class NodeComponent implements OnInit {
 // @Input() someObj = [];
 // @Input() tests  = [];
  // tslint:disable-next-line:variable-name
 // @Input() comments: Comment[] | undefined;
  @Input() orgs: Org[] | undefined;
  // tslint:disable-next-line:no-output-on-prefix
  @Output() onAdd = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  Add(){
  this.onAdd.emit();

  }
}
