import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

      i = 0;

  bgColor = "white";
  Gradient = [
        '5e4b67',
        '5e4b67',
        '5f4c69',
        '5f4d69',
        '604e6a',
        '604f6b',
        '614f6c',
        '61506d',
        '62516e',
        '62526e',
        '63526f',
        '635370',
        '645471',
        '645572',
        '655673',
        '655674',
        '665774',
        '665875',
        '675976',
        '685977',
        '685a78',
        '695b79',
        '695c7a',
        '6a5c7a',
        '6a5e7b',
        '6b607b',
        '6b637a',
        '6b657a',
        '6c687a',
        '6c6a7a',
        '6d6d79',
        '6d6f79',
        '6d7279',
        '6e7579',
        '6e7779',
        '6f7a78',
        '6f7c78',
        '6f7f78',
        '708178',
        '708477',
        '718677',
        '718977',
        '718b77',
        '728e76',
        '729176',
        '739376',
        '739676',
        '739875',
        '749b75',
        '759d75',
        '789e76',
        '7a9f76',
        '7da176',
        '7fa277',
        '82a377',
        '84a577',
        '87a678',
        '89a778',
        '8ca978',
        '8eaa79',
        '91ab79',
        '93ad7a',
        '96ae7a',
        '98af7a',
        '9bb17b',
        '9db27b',
        'a0b37b',
        'a2b57c',
        'a5b67c',
        'a7b77c',
        'aab97d',
        'acba7d',
        'afbb7e',
        'b1bd7e',
        'b4be7e',
        'b6bf7e',
        'b8c07f',
        'bac17f',
        'bdc27f',
        'bfc480',
        'c1c580',
        'c3c680',
        'c5c780',
        'c8c881',
        'cac981',
        'ccca81',
        'cecb82',
        'd1cd82',
        'd3ce82',
        'd5cf82',
        'd7d083',
        'd9d183',
        'dcd283',
        'ded384',
        'e0d484',
        'e2d684',
        'e5d784',
        'e7d885',
        'e9d985',
        'e9d985'
    ];


    constructor(public router: Router) { }

  ngOnInit() {
  }


  toPortfolio() {
      this.router.navigateByUrl('/Main');
  }

  hoverPortfolio()      {

      let j = 0;
      setInterval(() => {
          if(j >= 100)  {
                return;
          }
          this.bgColor = '#' + this.Gradient[j];
          j++;
      }, 200);
  }

  mouseleave()      {
          this.bgColor = "white";
  }
}
