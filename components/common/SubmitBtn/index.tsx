import React from 'react'

import LinkArrow from 'icons/linkArrow'

import styles from './index.module.css'

interface ISubmitBtnProps {
    onClick?: () => void
    isLoading?: boolean
    submitStatus?: 'success' | 'error' | null
    className?: string
}

const SubmitBtn = ({
    isLoading,
    className,
    submitStatus,
    onClick,
}: ISubmitBtnProps) => {
    const onClickHanlder = () => {
        if (onClick && !isLoading) {
            onClick()
        }
    }
    return (
        <div
            className={`${styles.submit} ${className}`}
            onClick={onClickHanlder}
        >
            Оставить заявку <LinkArrow color="yellow" />{' '}
            <span className={styles.iconsWrapper}>
                <span
                    className={`${styles.loader} ${isLoading && styles.isLoading}`}
                ></span>
                <span
                    className={`${styles.success} ${submitStatus === 'success' && !isLoading && styles.isSuccess}`}
                >
                    ✅
                </span>
                <span
                    className={`${styles.error} ${submitStatus === 'error' && !isLoading && styles.isError}`}
                >
                    🚫
                </span>
            </span>
        </div>
    )
}

export default SubmitBtn
