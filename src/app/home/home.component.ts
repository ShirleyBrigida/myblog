import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Post } from '../post.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private date = new Date();
  private today = new Date();
  posts$: Observable<Post[]>;
  dayName = new Array ("domingo", "segunda", "terça", "quarta", "quinta", "sexta", "sábado");
  monName = new Array ("janeiro", "fevereiro", "março", "abril", "maio", "junho", "agosto", "outubro", "novembro", "dezembro");
  now = new Date();
 

  constructor(private service: PostService) { }

  ngOnInit() {
    this.posts$ = this.service.getPosts();
    document.write ("<h1> Hoje é " + this.dayName[this.now.getDay() ] + ", " + this.now.getDate () + " de " + this.monName [this.now.getMonth() ]   +  " de "  +     this.now.getFullYear () + ". </h1>");
  }

}

