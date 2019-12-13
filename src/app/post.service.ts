import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Post } from './post.model';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class PostService {
    baseUrl = 'http://localhost:3000';
   
    constructor(private http: HttpClient) {}

    httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
    }

    CreatePost(data): Observable<Post> {
        return this.http.post<Post>(this.baseUrl + '/posts/', JSON.stringify(data),this.httpOptions);    
    }

    getPosts(): Observable<Post[]> {
        return this.http.get<Post[]>(this.baseUrl + '/posts');
    }

    getPost(id: number): Observable<Post[]> {
        return this.http.get<Post[]>(this.baseUrl + '/posts'+ id);
    }

}