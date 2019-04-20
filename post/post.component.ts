import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  @Input() lastUpdate: Date;
   i = 0;
  @Input() postName: string;
  @Input() postContent: string;
constructor() { }
ngOnInit() {
  }

Add() {
  this.i++;
  console.log(this.i);
  }
  Remove() {
    this.i--;
    console.log(this.i);
  }
}
