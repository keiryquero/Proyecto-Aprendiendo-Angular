import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
name = 'Andreina';
age = 40;
img ='https://source.unsplash.com/random';
img2 ="https://1.bp.blogspot.com/-uJalMdKr9Vk/YPr1p4uttvI/AAAAAAAAF0g/QhckBNj2RFQlh-MuL2oibfNVyzWretsAgCLcBGAsYHQ/s672/Screenshot_20210723-175114_1.png"; style="width: 528px; height: 527px";
btndisabled = true;
imgParent= '';
showImagen= true;


hermana: string[]= ['karol','keiry','Keisy','Natalia'];
newName:string ="";


toggleButton(){
  this.btndisabled = !this.btndisabled;
}

increaseAge(){
  this.age += 1;
}
onScroll(event: Event){
const element = event.target as HTMLElement;
//console.log(element.scrollTop);

}

changeName(event: Event){
  const element = event.target as HTMLInputElement;
  this.name = element.value;
}

addName(){
  this.hermana.push(this.newName);
  this.newName = "";
}
deleteName(index: number){
  this.hermana.splice(index,1);
}

onLoaded(img: string){
  console.log ('este es el padre', img)
}

toggleImagen(){
  this.showImagen = !this.showImagen;
}

}
