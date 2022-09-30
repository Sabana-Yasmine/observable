import { Component, OnInit } from '@angular/core';
import { ObserveService } from '../observe.service';
import { map, filter } from 'rxjs/operators'
import { of, from, interval, take, fromEvent, concat, concatMap } from 'rxjs';

@Component({
  selector: 'app-operators',
  templateUrl: './operators.component.html',
  styleUrls: ['./operators.component.css']
})
export class OperatorsComponent implements OnInit {

  arr = [1,2,3,4,5]

  constructor(private service : ObserveService) { 

    // const data =from(this.arr)
    // data.subscribe({
    //   next(res){
    //     console.log("res",res)
    //   },
    //   error(err){
    //     console.log("err",err)
    //   },
    //   complete(){
    //     console.log("completed")
    //   }
    // })

    // get(){
    //   this.service.getData()
    //   .pipe(
    //     concatMap(products=>products.result),
    //     filter((prod:any) => prod.price < 20000)
    //   )
    //   .subscribe(res => {
    //     console.log("price",res)
    //   })
    // }
  }

  ngOnInit(): void {
    // const result = fromEvent <MouseEvent>(document.getElementById('btn')!,'click')
    // result.subscribe(res =>{
    //   console.log("res", res)
    // })

    const num = of(1,2,3,4,5);
    const value = map((val : number) => val * val);
    const result = value(num);
    result.subscribe(res => {
      console.log("res",res)
    })
  }

}
