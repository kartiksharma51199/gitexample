import { Component, DoCheck, OnInit } from "@angular/core";
import { Console } from "console";
import { WfxComponentAttributes } from "../../../wfxlibrary/wfxsharedmodels/wfxcommonmodel";

@Component({
  selector: "app-add-buyer",
  templateUrl: "./add-buyer.component.html",
  styleUrls: ["./add-buyer.component.css"],
})
export class AddBuyerComponent implements OnInit, DoCheck {
  constructor() {}

  name = "";
  description = "";
  capacityOfBuying = "";
  namedisplay = false;
  descriptiondisplay = false;
  country;
  GSTN = false;
  disable = true;
  category = [];
  BuyerData = {};
  nameCheck = false;
  descriptionCheck = false;
  countrycheck = false;
  categoryCheck = false;
  capacityCheck = false;
  displaydetails = false;
  itemJsonDef = [
    {
      readonly: false,
      mandatory: true,
      caption: "Name",
      disable: false,
      value: "fname",
      valuetype: "dbfield",
      inputtype: "textbox",
      itemid: "txtFirstName",
    },
    {
      readonly: false,
      mandatory: true,
      caption: "Country",
      valuetype: "dbfield",
      valuetext: "optionname",
      value: "idtesting",
      addclearicon: true,
      addimginddl: true,
      addsearchoptioninddl: false,
      multiselect: false,
      disable: false,
      inputtype: "select",
      addselecttext: "select",
      ddlvalue: "idtesting",
      ddlvaluetext: "text",
    },
    {
      readonly: false,
      mandatory: true,
      caption: "Categories",
      valuetype: "dbfield",
      addclearicon: false,
      addimginddl: true,
      addsearchoptioninddl: false,
      valuetext: "optionname",
      value: "category",
      multiselect: true,
      disable: false,
      inputtype: "select",
      ddlvalue: "category",
      addselecttext: "ALL",
      ddlvaluetext: "text",
    },
    {
      readonly: false,
      mandatory: true,
      caption: "Yes",
      valuetype: "dbfield",
      value: "SwitchOn",
      disable: false,
    },
    {
      readonly: false,
      mandatory: true,
      caption: "First Name",
      disable: false,
      value: "fname",
      valuetype: "dbfield",
    },
    {
      readonly: false,
      mandatory: true,
      caption: "Capacity of buying",
      disable: false,
      value: "fname",
      valuetype: "dbfield",
      inputtype: "textbox",
      inputsubtype: "number",
      decimalplaces: 0,
      itemid: "txtFirstName",
    },
    {
      caption: "Save",
      visible: true,
      itemid: "txtFirstName",
      disable: false,
    },
  ];
  selectCountries: any[] = [
    { text: " Switzerland", idtesting: "A" },
    { text: " Afghanistan", idtesting: "B" },
    { text: " Albania", idtesting: "C" },
    { text: " France", idtesting: "D" },
    { text: " Andorra", idtesting: "E" },
    { text: " Australia", idtesting: "F" },
    { text: " Bangladesh", idtesting: "G" },
    { text: " Canada", idtesting: "H" },
    { text: " Denmark", idtesting: "I" },
    { text: " Italy", idtesting: "J" },
    { text: " United States of America", idtesting: "K" },
    { text: " Haiti", idtesting: "L" },
    { text: " Germany", idtesting: "M" },
  ];
  selectCategories: any[] = [
    { text: " Jewellery", category: "A" },
    { text: " Mobiles", category: "B" },
    { text: " Computers", category: "C" },
    { text: " TV", category: "D", value: "TV" },
    { text: " Men Fashion", category: "E" },
    { text: " Women Fashion", category: "F" },
    { text: " Furnitures", category: "G" },
    { text: " Grocery", category: "H" },
    { text: " Cars", category: "I" },
    { text: " Bikes", category: "J" },
  ];
  ngOnInit() {}
  ngDoCheck(): void {}
  GSTNlblJsonData = {
    fname: "GSTN",
  };
  jsonDataName = {
    fname: "",
  };
  jsonDatacountry = {
    fname: "",
  };
  jsonDatacapacity = {
    fname: "",
  };
  jsonDatacategory = {
    fname: "",
  };
  jsonDatatoggle = {
    fname: "",
  };
  textAreajsonData = {
    fname: "",
  };
  textAreaJsonDef = {
    readonly: false,
    mandatory: true,
    caption: "Description",
    disable: false,
    value: "fname",
    valuetype: "dbfield",
    inputtype: "textbox",
    itemid: "txtFirstName",
  };
  btnSampleFormatJsonDef: WfxComponentAttributes = {
    inputtype: "button",
    itemid: "btnSampleFormat",
    caption: "Save",
    visible: true,
    disable: true,
    classExpression: "wfx-primary-button",
    style: { textAlign: "center", width: "160px" },
    tooltip: {
      tooltipvalue: "Save",
      tooltipvaluetype: "text",
      tooltipposition: "below",
    },
  };
  getName(event) {
    this.name = event.target.value.trim();
    if (!this.name.trim()) {
      this.namedisplay = true;
    } else if (this.name.length) {
      this.nameCheck = true;
    } else {
      this.nameCheck = false;
    }
    this.valueCheck();
  }
  getDescription(event) {
    this.description = event.target.value.trim();
    if (!this.description.trim()) {
      this.descriptiondisplay = true;
    } else if (this.description.length) {
      this.descriptionCheck = true;
    } else {
      this.descriptionCheck = false;
    }
    this.valueCheck();
  }
  getCapacityOfBuying(event) {
    this.capacityOfBuying = event.target.value.trim();
    if (this.capacityOfBuying.length) {
      this.capacityCheck = true;
    } else {
      this.capacityCheck = false;
    }
    this.valueCheck();
  }
  getCountry(event) {
    this.country = event.optionname;
    if (this.country.length) {
      this.countrycheck = true;
    } else {
      this.countrycheck = false;
    }
    this.valueCheck();
  }
  getCategory(event) {
    this.category = event;
    if (this.category.length) {
      this.categoryCheck = true;
    } else {
      this.categoryCheck = false;
    }
    this.valueCheck();
  }
  getGSTN(event) {
    if (event.SwitchOn == true) {
      this.GSTN = true;
    } else {
      this.GSTN = false;
    }
  }

  saveData() {
    let categoryName = [];
    let gstn;

    for (let i = 0; i < this.category.length; i++) {
      if (this.category[i].category == -1) {
        for (let j = 0; j < this.selectCategories.length; j++) {
          categoryName.push(this.selectCategories[j].text);
        }
      } else {
        categoryName.push(this.category[i].optionname);
      }
    }

    if (this.GSTN == true) {
      gstn = "Yes";
    } else {
      gstn = "No";
    }

    this.displaydetails = true;
    this.BuyerData = {
      Name: this.name,
      Description: this.description,
      Country: this.country,
      Categories: categoryName,
      GSTN: gstn,
      CapacityOfBuying: this.capacityOfBuying,
    };

    //console.log(this.name,this.description,this.country,categoryName,this.capacityOfBuying,gstn);
  }
  valueCheck() {
    if (
      this.nameCheck === true &&
      this.descriptionCheck === true &&
      this.countrycheck === true &&
      this.categoryCheck === true &&
      this.capacityCheck === true
    ) {
      this.btnSampleFormatJsonDef.disable = false;
    } else {
      this.btnSampleFormatJsonDef.disable = true;
    }
  }
}
