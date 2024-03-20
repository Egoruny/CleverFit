import CalendarCastomBage from '@components/calendar-castom-bage/calendar-castom-bage';

const RenderBage = ({ trainings }) => {
    return (
        <>
            <ul>
                {trainings.map(({ name,isImplementation }) => (
                    <li key={name} style={{ lineHeight: 1.2 }}>
                        <CalendarCastomBage text={name} isImplementation={isImplementation}/>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default RenderBage;
