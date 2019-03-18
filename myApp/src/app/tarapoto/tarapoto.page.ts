import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tarapoto',
  templateUrl: './tarapoto.page.html',
  styleUrls: ['./tarapoto.page.scss'],
})
export class TarapotoPage implements OnInit {

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  }
  public atras() {
    this.router.navigate(['../list']);
  }
  public mas() {
    this.router.navigate(['../tarapotofull']);
  }
}
