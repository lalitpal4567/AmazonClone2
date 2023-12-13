import React from 'react'

const CurrencyFormatter = ({price}) => {
  return (
    <>
        {Intl.NumberFormat("en-IN",{
            currency: "INR",
            maximumFractionDigits: 2
        }).format(price)
        }
    </>
  )
}

export default CurrencyFormatter
