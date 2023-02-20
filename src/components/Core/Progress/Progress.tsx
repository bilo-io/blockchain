import React from 'react'

type ProgressProps = {
    type: 'circular' | 'linear',
    ratio?: number;
    isContinuous?: boolean;
}

export const Progress: React.FC<ProgressProps> = (
    {
        type,
        isContinuous,
        ratio,
    }
) => {
    return (
        <div>Progress: {type} </div>
    )
}