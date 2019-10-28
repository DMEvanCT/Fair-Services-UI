// This is used to describe the volunteer opertunites

export class ModelOps {
  opertunity;

  constructor() {
    this.opertunity = [ new Opertunity('Admission', 'Help get people into the fair!', 'Free ticket and parking pass',
      ['Gates Teller', 'Ticket Pre-sales']),
      new Opertunity('Administrative Services', 'Help behind the scenes at the Durham Fair! ' +
        // tslint:disable-next-line:max-line-length
        'Anything from making signs to working with technology', 'Badge for access to the fair throughout the entire fair time and a ' +
        'free parking pass', ['Computer Services', 'Office Services/Purchasing',
        'Printing/Buyer', 'Ribbons & Trophies', 'Signs'])

    ];
  }
};

export class Opertunity {
  opname;
  description;
  perks;
  positions;

  constructor(opname, description, perks, position) {
    this.opname = opname;
    this.description = description;
    this.perks = perks;
    this.positions = position;
  }
}
