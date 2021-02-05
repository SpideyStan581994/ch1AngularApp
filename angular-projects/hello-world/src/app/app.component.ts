import { Component, OnInit, ViewChild } from '@angular/core';
import { FooterComponent } from './footer/footer.component';
import { Page2Component } from './page2/page2.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'SimpleAngularApp';

  @ViewChild('footer', { static: true })
  footerComponent!: FooterComponent;

  @ViewChild('page2',{static:true})
  page2Component!: Page2Component;

  currentPage = 0;

  startTime = '';

  updateLastAccessed(){
    console.log('the previous last accesed value was ' + this.footerComponent.lastAccessed); // read property
    this.footerComponent.lastAccessed = new Date().toString(); // write property

  }

  ngOnInit(): void {
    this.startTime = new Date().toString();
  }
  
  incrementHitCounter(page: number){
    this.currentPage = page;
    if(page === 2)
    {
      this.page2Component.addNumberOfHits();
    }
  }

}
