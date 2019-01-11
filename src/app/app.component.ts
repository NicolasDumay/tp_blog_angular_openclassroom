import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  posts= [
    {
      title: "Art 1",
      content: "Lorem ipsum",
      date : new Date(),
      loveIts : 2
    },
    {
      title: "Art 2",
      content: "Lorem ipsum",
      date : new Date(),
      loveIts : 0
    },
    {
      title: "Art 3",
      content: "Lorem ipsum",
      date : new Date(),
      loveIts : -1
    }
  ]
}

