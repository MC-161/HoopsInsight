import React from 'react'

interface WidgetWrapperProps {
  children: React.ReactNode;
  className?: string; // Allow additional styling
}

const WidgetWrapper:React.FC<WidgetWrapperProps> = ({className, children}) =>  {
  return (
    <div className={`bg-background-alt shadow-sm shadow-zinc-200 rounded-md p-4 ${className}`}>{children}</div>
  )
}

export default WidgetWrapper
