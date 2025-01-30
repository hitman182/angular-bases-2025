import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  standalone: false,

  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public heroes: string[] =['Spiderman','Ironman', 'Thor', 'Hulk'];
  public hero? :string;

  deleteLastHero(): void{
    this.hero  = this.heroes.pop();
  }

  resetHeroes(): void{
    this.heroes =['Spiderman','Ironman', 'Thor', 'Hulk'];
    this.hero = undefined;
  }

}
