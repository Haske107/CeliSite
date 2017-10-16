import { Component, OnInit } from '@angular/core';
import {DomSanitizer} from "@angular/platform-browser";


@Component({
  selector: 'app-main-grid',
  templateUrl: './main-grid.component.html',
  styleUrls: ['./main-grid.component.css']
})
export class MainGridComponent implements OnInit {

    color: string = '#5e4b67';
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


    index = 0;
    buffer = 0;
    forward = true;






    public Background: any;

    constructor(private sanitizer: DomSanitizer)
    {}

        transform(style) {
        return this.sanitizer.bypassSecurityTrustStyle(style);
    }

    ngOnInit() {
        //color: #FF0000

        let rgba = this.transform(this.ConvertHexToRGBA(this.color, 0.7));

        //rgba: rgba(255,0,0,0.7)

        this.Background = this.transform("-webkit-linear-gradient(left, rgba(0, 0, 0, 0)," + rgba + "rgba(0, 0, 0, 0))"
            + "-o-linear-gradient(left, rgba(0, 0, 0, 0),"   + rgba + "rgba(0, 0, 0, 0))"
            + "linear-gradient(to right, rgba(0, 0, 0, 0),"  + rgba + "rgba(0, 0, 0, 0))")
    }

    public ConvertHexToRGBA(hex:string, opacity?:number):string
    {
        opacity = opacity || 1;

        opacity < 0 ? opacity = 0 : opacity = opacity;
        opacity > 1 ? opacity = 1 : opacity = opacity;

        hex = hex.replace('#','');

        let r = parseInt(hex.substring(0, 2), 16);
        let g = parseInt(hex.substring(2, 4), 16);
        let b = parseInt(hex.substring(4, 6), 16);

        return 'rgba(' + r + ',' + g + ',' + b + ',' + opacity +')';

    }

    onScroll(event: any)  {
       if(this.buffer === 5) {
           this.color = "#" + this.Gradient[this.index];

           if(this.forward) {
               if(this.index === 99)   {
                   this.forward = false;
               }
               this.index++;

           }   else {
               if(this.index === 0)   {
                   this.forward = true;
               }
               this.index--;
           }

           this.buffer = 0;
       } else {
           this.buffer++;
       }
    }
}
