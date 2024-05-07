import React from 'react'

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

    const hasIcon =
        isLoading || submitStatus === 'success' || submitStatus === 'error';
    return (
        <div
            className={`${styles.submit} ${className}`}
            onClick={onClickHanlder}
        >
            <div className={styles.wrapper}>
                <span
                    className={`${styles.iconsWrapper} ${hasIcon && styles.hasIcon}`}
                >
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
                Оставить заявку
            </div>
        </div>
    )
}

export default SubmitBtn
