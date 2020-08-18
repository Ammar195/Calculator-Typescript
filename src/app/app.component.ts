import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  operationField = "0";
  operationType = "";
  firstVal = "";
  secondVal = "";
  subtractOp = "";
  result = 0;
  secondValStatus = false;
  signAllowed = false;
  // *********************

  setEnteredNumber(event) { // ------ Button Pressed status updater

    if (this.operationField == "0") {
      this.operationField = "";
    }

    if (event.target.value >= 0 && event.target.value <= 9) {

      if (this.operationType != "sub") { // --- If addition case
        this.signAllowed = false;
        if (!this.secondValStatus)
          this.firstVal += event.target.value;
        else
          this.secondVal += event.target.value;
      }
      else {  // --- If subtraction case
        this.signAllowed = false;
        if (!this.secondValStatus)
          this.firstVal += (this.subtractOp + event.target.value);
        else
          this.secondVal += (this.subtractOp + event.target.value);
      }

      this.operationField += event.target.value;
      this.subtractOp = "";
    } // --- if ends here -----------------------


    else if (event.target.value == "add") {  // --- If addition button pressed
      if (this.secondValStatus)
        this.Operations();

      if (this.operationField != "")
        this.secondValStatus = true;

      if (!this.signAllowed) {
        this.operationField += ("+");
        this.signAllowed = true;
      }

      this.operationType = "add";
    }

    else if (event.target.value == "sub") { // --- If subtraction button pressed
      if (this.secondValStatus)
        this.Operations();

      if (this.operationField != "")
        this.secondValStatus = true;

      if (!this.signAllowed) {
        this.operationField += ("-");
        this.signAllowed = true;
      }
      this.subtractOp = "-";
      this.operationType = "sub";
    }

  } // *****

  Operations() { // ------ Perform Calculation operations ---y
    if (this.operationType == "add" && this.firstVal != "" && this.secondVal != "") {
      this.secondValStatus = false;
      this.operationType = "";
      this.result = parseInt(this.firstVal) + parseInt(this.secondVal);
      this.operationField = this.result + "";
      this.firstVal = this.result + "";
      this.secondVal = "";
    }

    else if (this.operationType == "sub" && this.firstVal != "" && this.secondVal != "") {
      this.secondValStatus = false;
      this.operationType = "";
      this.result = parseInt(this.firstVal) + parseInt(this.secondVal);
      this.operationField = this.result + "";
      this.firstVal = this.result + "";
      this.secondVal = "";
    }
  }

  ClearFields() {  // ------ Reset/Clear everything
    this.secondValStatus = false;
    this.signAllowed = false;
    this.operationType = "";
    this.operationField = "0";
    this.firstVal = "";
    this.secondVal = "";
  }


} // ***** Class Ends ********************************************************************
