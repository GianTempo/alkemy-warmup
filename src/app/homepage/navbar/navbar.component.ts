import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor (private titleSvc: Title, private breakpointObserver: BreakpointObserver) { }
  
  isHandset: Observable<BreakpointState> = this.breakpointObserver.observe(Breakpoints.Handset)

  ngOnInit(): void {
  }

  setTitle(title: string) {
    this.titleSvc.setTitle(`Alkemy Blog | ${title}`);
  }
}
