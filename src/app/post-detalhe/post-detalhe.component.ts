import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-post-detalhe',
  templateUrl: './post-detalhe.component.html',
  styleUrls: ['./post-detalhe.component.css']
})
export class PostDetalheComponent implements OnInit {

  assunto: string;
  postar: Subscription;

  constructor(private route: ActivatedRoute) { 
    this.assunto = this.route.snapshot.params['assunto'];
    console.log(this.route);
  }

  ngOnInit() {
    this.postar = this.route.params.subscribe(
      (params: any) => {
        this.assunto = params['assunto'];
      }
    )
  }

}
