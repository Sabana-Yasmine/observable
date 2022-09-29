import { Component, OnInit } from '@angular/core';
import { ObserveService } from '../observe.service';
import { error } from 'console';
import { of } from 'rxjs'

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
 
  subscription : any;
  data : any;
 
  constructor( private Service:ObserveService) { }

  ngOnInit(): void {
    this.getDetails();
    this.test();
  }

  //using SUBSCRIBE to get all details

  getDetails(){
    this.subscription = this.Service.getData().subscribe(data => {
      console.log("Data...",data.result);

      this.data = data.result;
      
    },
    error =>{
      console.log("error occured...",error);
    })
    
  }

  //UNSUBSCRIBE
  ngOnDestroy(){
    console.log("unsubscribe...")
    this.subscription.unsubscribe();
  }

  test(){
    const myObservable =of(1,2,3,4,5)
    const myObserver = {
      
      next : (x : number) => console.log("Number : ",x),

      complete :()=>console.log('finished'),
    
      nextline : (x : number) => console.log("Number : ",x),

    };
    myObservable.subscribe(myObserver)
  }

}
