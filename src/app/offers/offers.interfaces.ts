export interface Offers {
  versions?: OfferVersion[];
  id?: string;
  href?: string;
}

export interface OfferVersion {
  characteristics?: Characteristic[];
  productOfferingPrices?: ProductOfferingPrice[];
  name?: string;
  id?: string;
}

export interface Characteristic {
  versions?: CharacteristicVersion[];
  id?: string;
}

export interface CharacteristicVersion {
  validFor?: ValidFor;
  valueType?: string;
  name?: string;
  id?: string;
  type?: string;
  characteristicValues?: CharacteristicValue[];
  properties?: Property[];
  displayValue?: string;
  value?: string;
  valueTypeSpecification?: ValueTypeSpecification;
}

export interface CharacteristicValue {
  displayValue?: string;
  isDefault?: boolean;
  validFor?: ValidFor;
  valueType?: string;
  value?: string;
}

export interface ValidFor {
  startDateTime?: string;
}

export interface Property {
  isSelected?: boolean;
  value?: string;
}

export interface ValueTypeSpecification {
  id?: string;
}

export interface ProductOfferingPrice {
  versions?: ProductOfferingPriceVersion[];
  id?: string;
}

export interface ProductOfferingPriceVersion {
  characteristics?: Characteristic[];
  markup?: number;
  price?: Price;
  percentage?: number;
  name?: string;
  id?: string;
  plaId?: string;
  popType?: string;
  frequency?: string;
}

export interface Price {
  amount?: number;
  units?: Units;
}

export interface Units {
  code?: string;
  name?: string;
}
