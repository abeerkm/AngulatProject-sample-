import { Component , Output} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Post } from '../post.module';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  enetredTitle='';
  enteredContent='';
  constructor(public postsService: PostsService) {}

  onAddPost(form: NgForm){
   this.postsService.addPost(form.value.title,form.value.content)
    }

  }

