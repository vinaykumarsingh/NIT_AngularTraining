import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-prodDetail',
  templateUrl: './prodDetail.component.html',
  styleUrls: ['./prodDetail.component.css']
})
export class AppprodDetail implements OnInit {
  routeParam:any;
  constructor(private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.routeParam = this.activatedRoute.snapshot.params.productId

    // this.activatedRoute.paramMap.subscribe(params => {
    //   debugger
    //   this.routeParam = params["params"].productId;
    //   console.log('routeParam', this.routeParam)

    // });

    console.log('product id in th eroute is ===>',this.routeParam)

  }

  backToProdListPage() {
    this.router.navigate(['/routeParam'])
  }


}
