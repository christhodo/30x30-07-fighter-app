import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'fighters';
  links = [
    { path: '/login', icon: 'vpn_key', title: 'Login' },
    { path: '/fighters', icon: 'vpn_list', title: 'Fighters' },
  ];
  backend = [{ path: '/backend/child', icon: 'face', title: 'Backend' }];
}
