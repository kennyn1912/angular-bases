import { Component } from '@angular/core';
import { EmptyError } from 'rxjs';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

public name: string = 'Iroman';
public age: number = 45;

get capitalizedName():string{
  return this.name.toUpperCase();
}

getHeroDescription():string{
  return `${this.name} - ${this.age}`;
}

changeHero():void{
this.name = 'Spiderman';
}
changeAge():void{
this.age = 50;
}
reseForm():void{
this.name = '';
  this.age = 50;
//document.querySelectorAll('h1')!.forEach(element =>{
//element.innerHTML = '<h1>Desde Angular</h1>';
}
}


