import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AuthService } from '../login/auth.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Video } from './video';
import { VideoService } from './video.service';


@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit{
  urlTree: any;
  //authService: any;
 //httpHeaders: any;
 private httpHeaders= new HttpHeaders({'Content-type':'application/json'})
  constructor(private http:HttpClient,private videoService :VideoService  ,private router:Router,private activatedRoute: ActivatedRoute,private authService:AuthService){}

public pelis:string;
public videos: Video[];
public video: Video= new Video();
public token:string;

private agregarAuthorizationHeader(){
  let token= this.authService.token;
    if(token!= null){
      return this.httpHeaders.append('Authorization','Bearer '+token);
    }
    return this.httpHeaders;
  }
  public urlEndPointP:string = 'http://localhost:8080/api/pelicula/video';

  public urlEndPointPe: any;
  /*cargarpeli(nombrePelicula):void{
  this.activatedRoute.params.subscribe(params=>{let nombrePelicula=this.pelis

    if(this.pelis){
       this.videour =this.videoService.getPeliculas(nombrePelicula).subscribe((video)=>this.video=video)
    }
    })
  }*/

  ngOnInit() {
    
  //llenar la variable pelis, siendo buscado con el idcuenta que se envia desde el hmtl cuenta
    this.activatedRoute.params.subscribe(
      (params: Params) => {

       /*  this.agregarAuthorizationHeader();

        
    if(token!= null){*/
        this.pelis = params['pelicula']; 
        //this.token= this.authService.token;
       // this.urlEndPointPe =  `${this.urlEndPointP}/${this.pelis}`,{headers: this.agregarAuthorizationHeader()};
      
       // this.urlEndPointPe = this.http.get(this.urlEndPointP,{headers: this.agregarAuthorizationHeader()});
      
        /* {headers: this.agregarAuthorizationHeader()}
       console.log("token",token)
       this.urlEndPointP= 'http://localhost:8080/api/pelicula/video/'+this.pelis,{headers:this.httpHeaders.append('Authorization','Bearer '+token)};*/
   
       // }
       
      // this.urlEndPointPe =this.videoService.getPeliculas(this.pelis);


    //this.videoService.getPeliculas(this.pelis).subscribe();
//console.log("vista",this.urlEndPointPe)
      }
    );
//    this.videoService.getPeliculas().subscribe(videos=>this.videos=videos);

   }

   //console.log("peli",pelis);
}
