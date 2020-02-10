import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  form: any = {
    components: [
      {
        type: 'custom-panel',
      }
    ]
  };

  submission: any = {
  };

  onSubmit(submission) {
    console.log(submission);
  }
}
