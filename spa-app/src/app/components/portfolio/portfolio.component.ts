import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../../services/portfolio.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
})
export class PortfolioComponent implements OnInit {
  portfolioList: any = [];

  constructor(private _portfolioService: PortfolioService) {}

  // Cuando el componente está renderizado
  ngOnInit(): void {
    this.portfolioList = this._portfolioService.getPortfolio();
    console.log('->', this.portfolioList);
  }
}
