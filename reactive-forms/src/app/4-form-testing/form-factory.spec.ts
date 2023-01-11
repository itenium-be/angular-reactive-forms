import { FormBuilder } from "@angular/forms";
import { createForm } from "./form-factory";

describe('form-testing', () => {
  it('sets the birthDate from the INSS', () => {
    const context = {fb: new FormBuilder(), subs: []};
    const frm = createForm(context, 'new-user');

    frm.get('inss')!.setValue('78.05.20-101.02');

    const birthDate = frm.get('birthDate')!.value;
    expect(birthDate).toBe('1978-4-20');
  });
});
