export interface Param {
  id: number;
  name: string;
  type: "string"; // В будущем может быть расширен другими типами, например, 'number'
}

export interface ParamValue {
  paramId: number;
  value: string;
}

export interface Model {
  paramValues: ParamValue[];
  // Предполагается, что Color это уже где-то определенный тип, его определение здесь пропущено для краткости
  colors?: any[];
}

export interface Props {
  params: Param[];
  model: Model;
}

export interface State {
  model: Model;
}
