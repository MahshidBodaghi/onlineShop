import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'main-menue',
  standalone: true,
  imports: [RouterLink, MatButtonModule, MatMenuModule, MatIconModule, TranslatePipe],
  templateUrl: './main-menue.html',
  styleUrl: './main-menue.css',
})
export class MainMenue {
  public translate = inject(TranslateService);

  constructor() {
    if (!this.translate.currentLang()) {
      this.translate.use('en');
    }
  }

  changeLang(lang: string) {
    this.translate.use(lang);
    document.documentElement.dir = lang === 'fa' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }
}
