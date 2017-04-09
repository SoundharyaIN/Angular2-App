import { Component } from '@angular/core';
import {PostsService} from '../services/posts.service';



@Component({
	moduleId:module.id,
  selector: 'user',
  templateUrl:'user.component.html',

	providers:[PostsService]  

}) 
export class UserComponent  { 
	
	posts:Post[];


	constructor(private postsService: PostsService){
		

	this.postsService.getPosts().subscribe(posts => {
		this.posts=posts;
			});
	}

	

	}

	
interface Post{
	    
      title:string;
      by:string;
      blurb:string;
      location:string;
      state:string;
      country:string;
      currency:string;      
      type:string;
      url:string; 
      "amt.pledged": string;

}