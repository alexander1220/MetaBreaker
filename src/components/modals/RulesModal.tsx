'use client';

import { ModalContext } from '../providers/ModalProvider';
import { MouseEventHandler, useContext } from 'react';


export default function RulesModal() {
    const { isRulesModalActive, toggleRulesModal } = useContext(ModalContext);

    const eventHandler: MouseEventHandler = (event) => {
        event.preventDefault();
        toggleRulesModal();
    };

    return (
        <dialog id={RulesModal.name} open={isRulesModalActive}>
            <article>
                <a href='' aria-label='Close' className='close' data-target={RulesModal.name}
                    onClick={eventHandler}></a>
                <h3>Rules</h3>
                <p>Break the meta.</p>
                <p>If you don't build EXACTLY what you rolled... then what's the point of using it 😪</p>
                <p>You are allowed to switch up the order of the items.</p>
                <footer>
                    <a href='' role='button' data-target={RulesModal.name} onClick={eventHandler}>Okay</a>
                </footer>
            </article>
        </dialog>
    );
}