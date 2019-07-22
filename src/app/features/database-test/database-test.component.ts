import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'vf-database-test',
  templateUrl: './database-test.component.html',
  styleUrls: ['./database-test.component.scss']
})
export class DatabaseTestComponent implements OnInit {

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
    this.apiService.get('test/'  + this.path + '.json').subscribe( res => {
      console.log('res', res);
    });
  }

}
