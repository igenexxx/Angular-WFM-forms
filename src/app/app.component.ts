import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  appState = 'off';
  ngOnInit(): void {}

  onModelChange($event: any) {
    console.log('Model changed: ', $event);
  }
}

