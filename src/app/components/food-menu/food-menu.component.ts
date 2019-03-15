import { MenuService } from './../../services/menu.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { IMenuResponse } from 'src/app/models/menu-response.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-food-menu',
  templateUrl: './food-menu.component.html',
  styleUrls: ['./food-menu.component.scss']
})
export class FoodMenuComponent implements OnInit, OnDestroy {
  menuList = [] as IMenuResponse[];
  menuSub: Subscription;

  constructor(
    private menuService: MenuService
  ) { }

  ngOnInit(): void {
    this.menuSub = this.menuService
      .getMenuList()
      .subscribe(res => {
        this.menuList = res;
      });
  }

  ngOnDestroy(): void {
    this.menuSub.unsubscribe();
  }
}
