import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'vf-database-test',
  templateUrl: './database-test.component.html',
  styleUrls: ['./database-test.component.scss'],
  animations: [
    trigger('fade', [
      state('void', style({opacity: 0, fontSize: '.1em'})),
      transition('void => *', [
        animate(2000)
      ]),
      transition('* => void', [
        animate(2000)
      ]),
    ])
  ],
})
export class DatabaseTestComponent implements OnInit {

  public array = [];
  public path: string;
  public form: FormGroup;
  constructor(private fb: FormBuilder, private apiService: ApiService) { }

  ngOnInit() {
    this.form = this.fb.group({
      username: ['', Validators.compose([Validators.required])],
      email: ['', Validators.compose([Validators.required])],
      password: ['', Validators.compose([Validators.required])],
    });
  }

  public onSubmit() {
    const formValue = this.form.value;
    console.log(formValue);
    if (this.path) {
      this.apiService.post( 'test/'  + this.path + '.json', formValue).subscribe( res => {
        console.log('res', res);


      });
    }

  }

  public onGet() {
    this.array = [];
    this.apiService.get('test/'  + this.path + '.json').subscribe( res => {
      console.log('res', res);
      if (res) {
        this.array = Object.values(res);
        console.log('this.array', this.array);
      }

    }, err => {
      console.log('err', err);
    });
  }

}
