import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiCallService } from '../../services/api-call.service';
import { error } from 'console';
import { MatchCardComponent } from '../../components/match-card/match-card.component';

@Component({
  selector: 'app-live',
  standalone: true,
  imports: [CommonModule, MatchCardComponent],
  templateUrl: './live.component.html',
  styleUrl: './live.component.css'
})

export class LiveComponent implements OnInit{

  // creating a constructor for injecting a vvariable of api-call service we have created
  constructor(private _api:ApiCallService){

  }

  // implementing to an interface, to run the api request on page load --> OnInit interface
  // implementing thr abstract method on this interface
  ngOnInit(): void {
    this.LoadLiveMatches();
  }

  // converting the code inside ngOnInit object to a new method and then calling this method
  private LoadLiveMatches() {
    this._api.getLiveMatches().subscribe({
      next: data => {
        console.log(data);
        this.liveMatches = data
      },
      error: error => {
        console.log(error);
      }
    });
  }

  // creating an instances variable of any type
  // once the data is loaded from api called, then we are assiging that data to this variable
  // once the data is assigned to this variable, we use it into component.html file to bind it any UI
  liveMatches:any
}
