import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { of,map } from 'rxjs';
import { ApiserviceService } from '../../Service/apiservice.service';
@Component({
  selector: 'app-rxjs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rxjs.component.html',
  styleUrl: './rxjs.component.scss'
})
export class RxjsComponent implements OnInit{
  constructor(private api :ApiserviceService) { }
 ngOnInit(): void {
    this.api.getdata().subscribe((data:any)=>{
      console.log(data);
    })
 }
}
