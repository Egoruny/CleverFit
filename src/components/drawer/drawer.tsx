import { Drawer, Typography, Button } from 'antd';
import { useState } from 'react';
import { CloseOutlined, PlusOutlined, EditOutlined, MinusOutlined } from '@ant-design/icons';
import DrawerInput from '@components/drawer-input/drawer-input';
import CalendarCastomBage from '@components/calendar-castom-bage/calendar-castom-bage';
import { useAppSelector, useAppDispatch } from '@redux/configure-store';
import { createExercise } from '@redux/slise/traningList-slise';
import { deleteExercises } from '@redux/slise/traningList-slise';
import { desctopVersionSelect } from '@redux/slise/select';
import { selectedTraningSelect } from '@redux/slise/select';

import style from './drawer.module.css';

const { Title, Text } = Typography;

const CastomDrawer = ({ open, onClose, date, isEdit }) => {
    const dispatch = useAppDispatch();
    const selectetTain = useAppSelector(selectedTraningSelect);
    const [indexArray, setIndexeArray] = useState<number[]>([]);
    const desctopVersion = useAppSelector(desctopVersionSelect);

    const onClick = () => dispatch(createExercise());


    const onSetIndexes = (index: number) => {
        if (indexArray.includes(index))
            setIndexeArray(indexArray.filter((element) => element !== index));
        else setIndexeArray([...indexArray, index]);
    };

    const deleteExercisesHedler = () => {
        dispatch(deleteExercises(indexArray));
        setIndexeArray([]);
    };

    return (
        <Drawer
            data-test-id='modal-drawer-right'
            width={desctopVersion ? 408 : 360}
            title={
                !isEdit ? (
                    <Title level={4}>Добавление упражнений</Title>
                ) : (
                    <Title level={4}>Редактирование</Title>
                )
            }
            destroyOnClose={true}
            closable={true}
            placement='right'
            open={open}
            onClose={onClose}
            mask={false}
            closeIcon={!isEdit ? <PlusOutlined style={{ color: '#000000' }} /> : <EditOutlined />}
            extra={
                <Button
                    data-test-id='modal-drawer-right-button-close'
                    type='text'
                    size='middle'
                    icon={<CloseOutlined style={{ color: 'gray' }} onClick={onClose} />}
                />
            }
        >
            <div className={style.discription_container}>
                <div>
                    <CalendarCastomBage text={selectetTain.name} openedInDrawer={true} />
                </div>
                <div>
                    <Text type='secondary'>{date.format('DD.MM.YYYY')}</Text>
                </div>
            </div>
            <div className={style.inputs_drawer}>
                {selectetTain.exercises?.map(({ name, approaches, weight, replays }, index) => (
                    <DrawerInput
                        key={index}
                        indexArray={indexArray}
                        checkBoxHadler={onSetIndexes}
                        name={name}
                        index={index}
                        isEdit={isEdit}
                        defaultValueApproaches={approaches}
                        defaultValueWeight={weight}
                        defaultValueReplays={replays}
                    />
                ))}
            </div>
            <div className={style.btn_wrapper}>
                <Button
                    className={style.add_btn}
                    type='text'
                    icon={<PlusOutlined />}
                    size='small'
                    onClick={onClick}
                >
                    Добавить ещё
                </Button>
                {isEdit && (
                    <Button
                        type='text'
                        icon={<MinusOutlined />}
                        size='small'
                        disabled={!indexArray.length}
                        onClick={deleteExercisesHedler}
                    >
                        Удалить
                    </Button>
                )}
            </div>
        </Drawer>
    );
};

export default CastomDrawer;
