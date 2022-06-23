import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Fund } from '../shared/fund.interface';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  STORAGE_KEY = 'funds';
  showForm = false;
  funds: Fund[];
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    const funds = localStorage.getItem(this.STORAGE_KEY);
    this.funds = funds ? JSON.parse(funds) : [];
  }

  createFund(name: string, net: string, code: string) {
    if (this.funds.find(f => code === f.code)) {
      alert('This fund has already been added');
      return;
    } 
    const fund: Fund = {
      name,
      netValue: Number(net),
      code
    };
    this.funds.push(fund);
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.funds));
    console.log(this.funds);
  }

}
