

import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Component , OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  user__info :any;
  constructor(private http : HttpClient,private route: ActivatedRoute){}
  ngOnInit(): void {
    this.route.queryParams
    .subscribe(params => {
      let ok = params
      this.user__info = params
      console.log(ok);
    }
  );


    this.http.get<any>('http://localhost:3000/signUpUser').subscribe(res=>{
      // console.log(res);
    })
  }
  
}
