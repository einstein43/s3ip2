import { ButtonHTMLAttributes, ReactNode } from 'react'
import styles from '../../styles/atoms/button.module.css'
import classNames from 'classnames'
import Image from 'next/image'

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    theme: string,
    size: string,
    handleClick?: (...args: any) => void,
    icon?: {
        src: any,
        alt: string
    },
    children: ReactNode
}

export const Button = ({
    theme,
    size,
    handleClick,
    icon,
    children,
    ...restProps
}: IButtonProps) => {

    return (
        <button
            className={classNames(
                styles.button,
                styles[theme], // Theme
                styles[size], // Size
                icon && styles.button__icon, // Icon
            )}
            {...restProps}
        >

            {/* Icon */}
            {
                icon &&
                <Image
                    src={icon.src}
                    alt={icon.alt}
                    width={12}
                    height={12}
                />
            }

            {/* Label */}
            {children}
        </button>
    )
}