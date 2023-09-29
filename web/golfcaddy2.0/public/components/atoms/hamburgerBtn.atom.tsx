import React from 'react'
import { Dispatch, SetStateAction } from 'react'
import classNames from 'classnames'
import styles from '../../styles/atoms/hamburgerBtn.module.css'

export const HamburgerBtn = ({
    isOpen,
    setIsOpen,
    style
}: {
    isOpen: boolean,
    setIsOpen: Dispatch<SetStateAction<boolean>>,
    style: string
}) => {

    // Onclick - open/close menu
    const handleClick = () => {
        setIsOpen!(isOpen => !isOpen)
    }

    // Standard btn
    return (
        <div 
            className={classNames(
                styles.menuBtn,
                styles[style],
                isOpen && styles[`menu__state_open_${style}`]
            )}
            onClick={handleClick}
        >
            <span className={styles.one}/>
            <span className={styles.two}/>
            <span className={styles.three}/>
        </div>
    )
        
}

export default HamburgerBtn