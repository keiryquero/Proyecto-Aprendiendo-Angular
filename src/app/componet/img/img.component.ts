import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit, Input,Output,EventEmitter,OnDestroy, OnChanges, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.css']
})
export class ImgComponent implements OnInit, OnDestroy, OnChanges {
  img: string = " ";
  @Input('img')
  set ChangeImg(newImg:string){
    this.img = newImg;
    // aqui se puede colocar código que se va a ejecutar si y sólo si  cambia la imagen
  }
  
  @Output()loaded = new EventEmitter<string>(); 
  imageDefault = "./assets/images/default.png";
 /*  counter = 0;
  counterFn: number | undefined; */
  
  
  constructor() {
    /* console.log('Constructor','imgValue =>', this.img); */
   }

   ngOnChanges(changes: SimpleChanges): void {
   /*  console.log('ngOnchange','imgValue =>', this.img);
    console.log('change',changes); */
  }

  ngOnInit(): void {
 /*    this.counterFn = window.setInterval(() =>{
      this.counter += 1;
      console.log('se esta corriendo counter')
    },1000); */
    
    
  }

 

  ngOnDestroy(){
   /*  console.log("ngOnDestroy"); */
/*     window.clearInterval(this.counterFn); */
  }



  imgError(){
    this.img = this.imageDefault;
  }
imgLoaded(){
  /* console.log("log hijo");
  this.loaded.emit(this.img); */
}

}
