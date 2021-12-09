import React from 'react';
import s from './Dialogs.module.css';

const Dialogs = (props) => {
    return (

        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + ' ' + s.active}>
                    Oleg
                </div>
                <div className={s.dialog}>
                    Andrii
                </div>
                <div className={s.dialog}>
                    Vadym
                </div>
                <div className={s.dialog}>
                    Olya
                </div>
                <div className={s.dialog}>
                    Valera
                </div>
            </div>

            <div className={s.messages}>
                <div className={s.message}>Hi</div>
                <div className={s.message}>How is your bla bla?</div>
                <div className={s.message}>Now</div>
            </div>
        </div>
    )
}

export default Dialogs;