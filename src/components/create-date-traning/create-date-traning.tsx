import { Checkbox, Input, Form, InputNumber, DatePicker, Select } from 'antd';
import moment from 'moment';
import type { Moment } from 'moment';
import { PeriodOptions } from '@utils/constans/options';

import style from './create-date-traning.module.css';

type CreateTreningInputProps = {
    isCheced: boolean;
    checkBoxHadler: () => void;
    onChangeDate: (date: Moment | null) => void;
    onChangePeriod: (value: string) => void;
    defaultDateValue: string;
    defultPeriodValue:number | null
    block?:boolean
};

const CreateDateTraning = ({
    isCheced,
    checkBoxHadler,
    onChangeDate,
    onChangePeriod,
    defaultDateValue,
    defultPeriodValue,
    block
}: CreateTreningInputProps) => {


    return (
        <>
            <div className={style.date_picker_checkbox}>
                <Form.Item name='ex' style={{ marginBottom: 0 }}>
                    <DatePicker
                        data-test-id='modal-drawer-right-date-picker'
                        format='DD.MM.YYYY'
                        disabledDate={(current) => current && current < moment().endOf('day')}
                        showToday={false}
                        onChange={onChangeDate}
                        defaultValue={defaultDateValue? moment(defaultDateValue):undefined}
                    />
                </Form.Item>
                <Checkbox  data-test-id='modal-drawer-right-checkbox-period' onChange={checkBoxHadler} checked={isCheced}>
                  
                    С переодичностью
                </Checkbox>
            </div>
            {isCheced && (
                <div style={{ width:block?'100%': '150px' }}>
                    <Select
                        data-test-id='modal-drawer-right-select-period'
                        style={{ width: '100%' }}
                        options={PeriodOptions}
                        labelInValue
                        onChange={onChangePeriod}
                        value={defultPeriodValue === null? PeriodOptions[0].label:PeriodOptions[defultPeriodValue - 1].label}
                    />
                </div>
            )}
        </>
    );
};

export default CreateDateTraning;
