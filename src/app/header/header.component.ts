import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  goToRecipes() {
  	this.router.navigateByUrl('/recipes');
  }


  goToShoppingList() {
  	this.router.navigateByUrl('/shopping-list');
  }

  toogleNavigation() {
     let dropDownMenu = document.querySelector(".navbar-collapse");
     
     if(dropDownMenu.classList.contains("show")) {
       dropDownMenu.classList.remove("show");
     }

     else {
       dropDownMenu.classList.add("show");
     }
  }

}
