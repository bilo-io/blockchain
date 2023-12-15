/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from 'react'

interface ProgressProps {
  type: 'circular' | 'linear'
  ratio: number
  size?: number
  color?: string
}

const CircularProgress: React.FC<{ ratio: number, size?: number, color?: string }> = ({
  ratio,
  size = 50,
  color = '#007bff'
}) => {
  const strokeWidth = 4 // Width of the progress bar stroke
  const radius = (size - strokeWidth) / 2 // Radius of the circular progress bar

  const circumference = 2 * Math.PI * radius // Circumference of the circular progress bar
  const offset = circumference - (ratio / 100) * circumference // Offset of the circular progress bar stroke

  return (
    <svg width={size} height={size}>
      <circle
        r={radius}
        cx={size / 2}
        cy={size / 2}
        stroke="#ddd"
        strokeWidth={strokeWidth}
        fill="none"
      />
      <circle
        r={radius}
        cx={size / 2}
        cy={size / 2}
        stroke={color}
        strokeWidth={strokeWidth}
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  )
}

const LinearProgress: React.FC<{ ratio: number, size?: number, color?: string }> = ({
  ratio,
  size = 200,
  color = '#007bff'
}) => {
  const progressHeight = 20 // Height of the progress bar
  const strokeWidth = 2 // Width of the progress bar stroke

  const progressStyle = {
    width: `${size}px`,
    height: `${progressHeight}px`,
    border: `${strokeWidth}px solid #ddd`,
    borderRadius: `${progressHeight / 2}px`,
    position: 'relative'
  }

  const progressBarStyle = {
    width: `${(ratio / 100) * (size - strokeWidth * 2)}px`,
    height: `${progressHeight - strokeWidth * 2}px`,
    borderRadius: `${(progressHeight - strokeWidth * 2) / 2}px`,
    backgroundColor: color,
    position: 'absolute',
    top: `${strokeWidth}px`,
    left: 0
  }

  return (
    // @ts-expect-error
    <div style={progressStyle}>
      {/* @ts-expect-error */}
      <div style={progressBarStyle}></div>
    </div>
  )
}

export const Progress: React.FC<ProgressProps> = ({ type, ratio, size, color }) => {
  return type === 'circular'
    ? (
    <CircularProgress ratio={ratio} size={size} color={color} />
      )
    : (
    <LinearProgress ratio={ratio} size={size} color={color} />
      )
}

export default Progress
