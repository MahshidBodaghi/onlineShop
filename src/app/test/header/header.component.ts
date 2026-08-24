import { Component, ChangeDetectionStrategy } from '@angular/core';
import { TopMenue } from "./top-menue/top-menue";
import { MainMenue } from "./main-menue/main-menue";
import { NavTop } from "./nav-top/nav-top";
import { MatToolbarModule } from '@angular/material/toolbar';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [TopMenue, MainMenue,NavTop,MatToolbarModule],
 // changeDetection: ChangeDetectionStrategy.Default,
  templateUrl:'./header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  logoImage ="images/logo-online-shopping-is-displayed-white-background_936990-637.avif"
}
