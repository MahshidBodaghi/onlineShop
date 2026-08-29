import { Component, ChangeDetectionStrategy } from '@angular/core';
import { TopMenue } from "./top-menue/top-menue";
import { MainMenue } from "./main-menue/main-menue";
import { NavTop } from "./nav-top/nav-top";
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [TopMenue, MainMenue,NavTop],

  templateUrl:'./header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  logoImage ="images/logo-online-shopping-is-displayed-white-background_936990-637.avif"
}
