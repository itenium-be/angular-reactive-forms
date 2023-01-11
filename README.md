Angular: Reactive Forms
=======================

Node: 16.10.0

```ps1
cd reactive-forms
npm install
npm start

# Run the tests
npm test
```

## Exercises

### Behaviors & Validators

#### FormArray

- Add a FormGroup/Array validator that checks that the same color is not selected twice
- Must have at least one color with a positive amount. Amounts must always be positive.
- When ordering a certain amount of Socks of a color, do a backend call to make sure that this does not exceed the current stock (See StockService)


#### FormTesting

- Disable Birth Date only when there is a valid INSS filled in
- Using route /form-testing/{id} if there is an id other than 'new-user', set the value of the Form to the value retrieved from the (fake) PersonService.
    - Only allow filling in the INSS when adding a User. When editting, the INSS and BirthDate should be disabled.
    - Likewise, the 'Accept EULA' is not visible when editting.
- Business vs Personal User:
    - When deselecting "Business", clear/reset the business fields (name, tax)
    - Add Required validators to Business.tax/name but only when business.active is true
    - Remove business.active from the FormGroup and have business be null or the BusinessModel (addControl/removeControl)
    - Change the Business checkbox into 2 radios "Business" & "Personal". They both have their own model. Set the other model to null when switching between Business/Personal
- Change address into "Main Address" and allow Invoicing & Shipping Addresses to be defined differenly (FormRecord or FormArray)


#### User Experience

- Display errors in a more user friendly way (ex: "Max length of 15 has been exceeded by 3 characters")
- Translate the options in the Country dropdown when the user selects a different language in the navbar (see NavbarComponent, LanguageService and assets/i18n)


### ControlValueAccessor

Create Components:

- 'Inss' (EventEmitter for the calculated birth date!)
- 'Tax' which validates the tax nr and formats correct inputs
- 'Business' which consists of a name and a tax nr
- Wrap an npm DatePicker (ex: https://github.com/vlio20/angular-datepicker) and use it for the BirthDate


## Resources

- [Official Docs: Reactive Forms](https://angular.io/guide/reactive-forms)
- [General Cheat Sheet](https://angular.io/guide/cheatsheet)
- [UnitTesting: Jasmine](https://itenium.be/blog/javascript/javascript-testing-jasmine-syntax/)
- [Bootstrap 5](https://getbootstrap.com/docs/5.0)
