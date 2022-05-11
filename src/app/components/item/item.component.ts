import {Component, Input, OnInit} from '@angular/core';
export class Comment {
  text: string | undefined;
  comments?: Comment[];
}


@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {


 public orgs = [
    {name: 'Руководитель', nodes: [
        {name: 'Финансовый отдел', nodes: [
            { name: 'Инженер 1', nodes: []},
            { name: 'Инженер 2', nodes: []},
          ]},
        {name: 'Отдел снабжения', nodes: []},
        {name: 'Отдел продаж', nodes: []}
      ]}
  ];
 public  someObj =  [
    {
      name: 'Thor',
      friends: [
        {
          name: 'Loki'
        },
        {
          name: 'Doctor Who'
        },
        {
          name: 'Onotole'
        }
      ]
    },
    {
      name: 'Onotole',
      friends: null
    },
    {
      name: 'Chubakka',
      friends: [
        {
          name: 'Darth Veider'
        }
      ]

    }];
  public tests = [
     [{name:"Alice",score:70,subject:"English"},{name:"John",score:68,subject:"English"}]
  ];

// tslint:disable-next-line:variable-name
  // @ts-ignore
  public comments: Comment[] = [
    {
      text: "1",
      comments: [
        {
          text: "1.1",
          comments: [
            {
              text: "1.1.1 "
            }
          ]
        },
        {
          text: "1.2",
          comments: [
            {
              text: "1.2.1"
            }
          ]
        }
      ]
    },
    {
      text: "2",
      comments: [
        {
          text: "2.1",
          comments: [
            {
              text: "2.1.1"
            }
          ]
        }
      ]
    }
  ];




  constructor() { }


  ngOnInit(): void {
  }

}
