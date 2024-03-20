import { Checkbox, Input, InputNumber } from 'antd';

import style from './drawer-input.module.css';
import { useAppDispatch } from '@redux/configure-store';
import {
    setExerciseName,
    setExerciseWeight,
    setExerciseApproaches,
    setExerciseReplays,
} from '@redux/slise/traningList-slise';

const DrawerInput = ({
    checkBoxHadler,
    name,
    index,
    indexArray,
    isEdit,
    defaultValueApproaches,
    defaultValueWeight,
    defaultValueReplays,
}) => {
    const isChecked = indexArray.includes(index);
    const dispatch = useAppDispatch();
    const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) =>
        dispatch(setExerciseName({ index, name: e.target.value }));

    const onChangeWeight = (value: number | null) =>
        dispatch(setExerciseWeight({ index, weight: value }));

    const onChangeApproaches = (value: number | null) =>
        dispatch(setExerciseApproaches({ index, approaches: value }));

    const onChangeReplays = (value: number | null) =>
        dispatch(setExerciseReplays({ index, replays: value }));
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

export default DrawerInput;
