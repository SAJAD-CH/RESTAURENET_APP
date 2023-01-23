import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  obj = {
    title: 'Restaurent App',
    username: 'luminar'
  }

  ngOnInit() {
    setTimeout(() => {
      this.obj = {
        title: 'Restaurent App',
        username: 'Luminar'
      }
    }, 5000);
  }

  onEv(ev: string) {
    console.log('onEvv....', ev);
  }
}
