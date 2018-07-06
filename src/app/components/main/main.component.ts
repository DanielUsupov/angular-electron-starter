import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(private translate: TranslateService) { }

  ngOnInit() {}

  changeLang(lang) {
    this.translate.use(lang);
  }

}
