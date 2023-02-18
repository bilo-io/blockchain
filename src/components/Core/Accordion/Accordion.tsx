import React, { useState } from 'react'
import './Accordion.style.scss'

interface AccordionProps {
  children: React.ReactNode | any
  header: React.ReactNode | any
  isOpenDefault?: boolean
}

export const Accordion: React.FC<AccordionProps> = ({
  children,
  header,
  isOpenDefault
}) => {
  // #region STATE
  const [isOpen, setIsOpen] = useState<boolean>(isOpenDefault ?? false)
  // #endregion

  // #region HANDLERS
  const handleToggle = (): void => { setIsOpen((prevState: boolean) => !prevState) }
  // #endregion

  return (
        <div className="accordion-container">
            <div className="accordion-header" onClick={handleToggle}>
                {header}
            </div>

            <div className={`accordion-children${isOpen ? '-open' : ''}`}>
                {children}
            </div>
        </div>
  )
}

export default Accordion
