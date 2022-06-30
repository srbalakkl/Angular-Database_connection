import {Component} from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {ConnectionService} from "./connection.service";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent {
    title = 'angularDB';

    submitForm = this.fb.group({
        foodName: [''],
        foodDescription: ['']
    })
    fName: string | undefined;
    fDescription: string | undefined;

    constructor(private fb: FormBuilder, private dataService: ConnectionService) {
        console.log()
    }

    onSubmit() {
        console.log("button is pressed")
        // console.log(this.submitForm.get('foodName')?.value);

        this.fName = (this.submitForm.get('foodName')?.value);
        this.fDescription = (this.submitForm.get('foodDescription')?.value);

        const data = {
            foodName: this.fName,
            fDesc: this.fDescription,
        };

        console.log(data);

        this.dataService.register(data).subscribe({
            next(x) {
                console.log("the x value is " + x)
            }
        })
    }

    sm() {

    }
}
