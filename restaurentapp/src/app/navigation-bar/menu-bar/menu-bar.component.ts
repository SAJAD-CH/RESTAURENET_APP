import { Component, Input, OnInit, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

interface User {title: string, username: string}

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss']
})
export class MenuBarComponent implements OnInit, OnChanges {

  @Input() objChild: any = {};
  @Output() newEv = new EventEmitter<string>();

  newObj: Partial<User> = {}

constructor(private router:Router){}

ngOnInit() {
}

ngOnChanges(changes: SimpleChanges) {
  this.newObj = Object.assign({}, this.objChild);
  if (changes && changes['objChild'] && changes['objChild']['currentValue']) {
    this.newEv.emit(this.newObj.title);
  }
}


navigateTo(route:string){
  this.router.navigate([`/${route}`])
}

}
