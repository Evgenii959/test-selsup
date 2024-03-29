import React from "react";
import {Props, State, Model} from './types'
import './App.css'

class ParamEditor extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      model: this.props.model, // Инициализируем модель состоянием из props
    };
  }

  // Метод для обновления значения параметра
  handleChange = (paramId: number, value: string) => {
    const updatedParamValues = this.state.model.paramValues.map(paramValue =>
      paramValue.paramId === paramId ? { ...paramValue, value } : paramValue
    );
    this.setState({ model: { ...this.state.model, paramValues: updatedParamValues } });
  };

  // Получение полной структуры модели
  getModel = (): Model => {
    return this.state.model;
  };

  render() {
    const { params } = this.props;
    const { model } = this.state;

    return (
      <div>
        {params.map((param) => {
          // Находим значение для текущего параметра, если оно есть
          const paramValue =
            model.paramValues.find((pv) => pv.paramId === param.id)?.value ||
            "";
          return (
            <div key={param.id}>
              <label>
                {param.name}:
                <input
                  type="text"
                  value={paramValue}
                  onChange={(e) => this.handleChange(param.id, e.target.value)}
                  className='input'
                />
              </label>
            </div>
          );
        })}
        <button onClick={() => console.log(this.getModel())}>Сохранить</button>
      </div>
    );
  }

}

export default ParamEditor;
