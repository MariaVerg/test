import { Component, OnInit } from '@angular/core';
import {Observable } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements  OnInit{
  title = 'testUSENSE';

  randomString: string = '';
  isPalindrome: boolean = false;
  onlyNumbers: boolean = false;
  

  getRandomString(): string {
    return Math.random().toString(36).substr(2, 5);
  }


  streamOfString = new Observable(x => {
    setInterval(() => {
      x.next(this.getRandomString());
    }, 3000);
  });
 

  ngOnInit() {
    
    this.streamOfString.pipe(filter((item: string) => 
      !item.split('').includes('0'))).subscribe(item => {
        this.randomString = item;
        if(item== item.split('').reverse().join('')) {
          this.isPalindrome = true;
        };
        if (Number(item)) {
          this.onlyNumbers = true;
        }
      }
    );
  } 
  

}
