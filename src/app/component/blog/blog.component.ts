import { Component, OnInit, HostListener } from '@angular/core';
import { Router        } from '@angular/router';
import { Title, Meta   } from '@angular/platform-browser';
import { environment } from '../../../environments/environment';
import { GlobalService } from '../../services/global.service';
import { ApiService } from '../../services/api.service';
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss'
})
export class BlogComponent implements OnInit {


  blogList: any = [];
  
  blogAPI  = environment.blog_api;
  appUrl   = environment.app_url;
  postAPI  = environment.post_api;

  //catList  : Array<BlogObj> = [];


  constructor(private _httpService:GlobalService, private router: Router, private meta: Meta, 
    private titleService: Title,private apiService: ApiService) { 
 
    /*
    if(Number(localStorage.getItem('usrId'))>0){
      this.name = localStorage.getItem('name');
      this.userLoggedIn = true;
    }
    */
    

  }


  

  ngOnInit(): void {

    this.getBlogData();
    /*
    this.apiService.getPosts().subscribe((res) => {
      this.blogList = res;
      console.log(res);
    });
    */

  }




  getBlogData(){

    this.blogList = [];
    const APIResp = this._httpService.httpCall(this.blogAPI + 'blog-api/web-blog');
    APIResp.subscribe(
      response => {

        var tmp = JSON.parse(JSON.stringify(response));
        console.log(tmp.data);
        this.blogList = tmp.data;

      },
      error => {
        var tmp = JSON.parse(JSON.stringify(error));
       },
      () => { }
    );

  }


}