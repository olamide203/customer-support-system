import React, { useState, useRef } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

interface DateInputProps {
    name: string;
    placeholder?: string;
    label: string;
}

const DateInput = ({ name, placeholder, label }: DateInputProps) => {
    const [startDate, setStartDate] = useState(new Date());
    return (
        <>
            <label
                htmlFor={name}
                className="font-poppins text-neutral-900/80 font-semibold px-2 capitalize"
            >
                {label}
            </label>
            <div className="relative w-fit">
                <DatePicker
                    selected={startDate}
                    onChange={(date: Date) => setStartDate(date)}
                    className="h-[43px] w-fit max-w-[150px] border border-neutral-300 rounded-lg p-2 px-4 text-neutral-900 outline-none placeholder:text-grey-2 focus:border-neutral-900 sm:text-base"
                />
                <button
                    className="absolute h-full grid items-center justify-center top-0 right-4"
                    type="button"
                >
                    <img src="/icons/calendar.svg" alt="" className="" />
                </button>
            </div>
        </>
    );
};

DateInput.defaultProps = {
    placeholder: '',
};

export default DateInput;
