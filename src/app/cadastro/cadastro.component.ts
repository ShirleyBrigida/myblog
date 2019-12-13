import { Component, OnInit} from '@angular/core';
import { PostService } from '../post.service';
import { FormGroup, FormControl, FormControlName} from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  formPost = new FormGroup ({
    assunto: new FormControl(''),
    conteudo: new FormControl('')
  })
  
  constructor(
    private service: PostService,
    private _bt: MatSnackBar) {}

  openBt() {
    this._bt.open("Post adicionado!"),{
      duration: (2 * 1000),
    };
  }
  ngOnInit() {}

  onSubmit(){
    const post = {
      assunto: this.formPost.get('assunto').value,
      conteudo: this.formPost.get('conteudo').value
    };

    this.service.CreatePost(post).subscribe(res => {
      console.log('Post adcionado!!')
    })
  }
}
