import {Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

      ShowEmail = false;
      EmailOpacity = 0;


    constructor(public router: Router) { }

  ngOnInit() {
          console.log("hello");
  }

      @ViewChild('container') Container;

    getCurrentOffsetTop(element: ElementRef) {
        const rect = element.nativeElement.getBoundingClientRect();
        return rect.top + window.pageYOffset - document.documentElement.clientTop;
    }

    onWindowScroll() {
          console.log(this.getCurrentOffsetTop(this.Container));
    }

    scroll(el)    {
          el.scrollIntoView();
    }
}
