import React, { useEffect, useRef, useState } from "react";
import Calendar from "react-calendar";
import dayjs from "dayjs";
import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/solid";

export interface IDateTimeInputProps {
  name: string;
  label?: string;
  placeholder?: string;
  error?: boolean;
}

const DateTimeInput: React.FC<IDateTimeInputProps> = ({
  name,
  label,
  placeholder = "",
  error = false,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [dateValue, setDateValue] = useState("");
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (selectedDate) {
      setDateValue(dayjs(selectedDate).format("DD-MMM-YYYY"));
    }
  }, [selectedDate]);

  return (
    <div className="relative grid space-y-2">
      <label htmlFor={name} className="text-gray-600 text-xs">
        {label ?? placeholder}
      </label>
      <input
        type="text"
        name={name}
        value={dateValue}
        placeholder={placeholder}
        ref={ref}
        onChange={() => {}}
        onClick={(e) => {
          setIsOpen(true);
          e.preventDefault();
        }}
        readOnly
        className={`input-default ${error ? "input-error" : "input-primary"}`}
      />
      {isOpen && (
        <button
          onClick={(e) => {
            setIsOpen(false);
            ref?.current?.focus();
          }}
          className="fixed inset-0 bg-gray-50 opacity-5 z-40 w-full h-full cursor-default"
          tabIndex={-1}
        />
      )}
      <div
        className={`${
          isOpen ? "" : "hidden"
        } w-full absolute inset-x-0 top-14 max-h-80 z-40 overflow-y-scroll bg-white p-3 rounded shadow-lg`}
      >
        <Calendar
          calendarType="US"
          showNeighboringMonth={false}
          onChange={(d) => {
            setSelectedDate(d);
            setIsOpen(false);
          }}
          className="text-gray-700 px-5 py-3"
          tileClassName=" hover:bg-gray-100"
          prev2Label={<ChevronDoubleLeftIcon className="w-4 h-4" />}
          prevLabel={<ChevronLeftIcon className="w-4 h-4" />}
          nextLabel={<ChevronRightIcon className="w-4 h-4" />}
          next2Label={<ChevronDoubleRightIcon className="w-4 h-4" />}
        />
      </div>
    </div>
  );
};

export default DateTimeInput;
