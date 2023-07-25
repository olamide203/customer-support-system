import React from 'react'

interface Props {
    text: string
}

const InfoText = ({ text }: Props) => {
  return (
    <div className="flex flex-row gap-1">
        <img src='/alert-circle.svg'/>
        <span className="font-poppins text-blue-400">{text}</span>
    </div>
  )
}

export default InfoText;
