import { Checkbox, Input, InputNumber } from 'antd';

import style from './drawer-input.module.css';



const MyTreningsInput = ({
    checkBoxHadler,
    name,
    index,
    indexArray,
    isEdit,
    defaultValueApproaches,
    defaultValueWeight,
    defaultValueReplays,
}) => {

    return (
        <>
            <Input
                data-test-id={`modal-drawer-right-input-exercise${index}`}
                size='small'
                value={name}
                defaultValue={name}
                onChange={onChangeName}
                className={style.Input}
                placeholder='Упражнениe'
                addonAfter={
                    isEdit && (
                        <Checkbox
                            checked={isChecked}
                            onChange={() => checkBoxHadler(index)}
                            data-test-id={`modal-drawer-right-checkbox-exercise${index}`}
                        />
                    )
                }
            />
            <div className={style.input_number_wrapper}>
                <div className={style.approaches}>
                    <div className={style.title_input}>Подходы</div>
                    <div>
                        <InputNumber
                            data-test-id={`modal-drawer-right-input-approach${index}`}
                            defaultValue={defaultValueApproaches}
                            onChange={onChangeApproaches}
                            size='small'
                            addonBefore={'+'}
                            min={1}
                        />
                    </div>
                </div>
                <div className={style.weight_count_wrapper}>
                    <div className={style.weight}>
                        <div className={style.title_input}>Вес,кг</div>
                        <div>
                            <InputNumber
                                data-test-id={`modal-drawer-right-input-weight${index}`}
                                defaultValue={defaultValueWeight}
                                onChange={onChangeWeight}
                                size='small'
                                addonBefore={'+'}
                                min={0}
                            />
                        </div>
                    </div>
                    <div className={style.seporator}>
                        <p>x</p>
                    </div>
                    <div className={style.count}>
                        <div className={style.title_input_count}>Количество</div>
                        <div>
                            <InputNumber
                                data-test-id={`modal-drawer-right-input-quantity${index}`}
                                defaultValue={defaultValueReplays}
                                onChange={onChangeReplays}
                                size='small'
                                addonBefore={'+'}
                                min={1}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MyTreningsInput