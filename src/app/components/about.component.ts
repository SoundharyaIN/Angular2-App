import { Component } from '@angular/core';

@Component({
  selector: 'about',
  template: `
	<div class="container">
  	<h1>About this project</h1>
	<h3>{{post.title}}</h3>
	<p>{{post.by}}</p>
	<p>{{post.blurb}}</p>

	<p>{{post.location}}</p>
	</div>
  `,
})
export class AboutComponent  { 
	
	}
