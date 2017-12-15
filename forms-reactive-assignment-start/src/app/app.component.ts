import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Promise } from 'q';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class  AppComponent implements OnInit {

  projectsForm: FormGroup;

 ngOnInit() {
  this.projectsForm = new FormGroup({
   'name': new FormControl('al', Validators.required, this.forbiddenName),
   'mail': new FormControl(null, [Validators.email]),
   'status': new FormControl('s'),

  });
 }

 onSubmit() {
  console.log(this.projectsForm);
  }




 forbiddenName(control: FormControl): Observable<any> {
  return  Observable.create(observer => {
     if ( control.value == 'Test') {       
      observer.next({'forbiddenName': true});
     }else {
       observer.next(null);
      }

    observer.complete();
  });

 }


}
