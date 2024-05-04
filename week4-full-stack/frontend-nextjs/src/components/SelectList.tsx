"use client";

import { useState, Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { IconCheck, IconSelector } from "@tabler/icons-react";

const options = [
  { id: 1, content: "最新內容", value: "asc" },
  { id: 2, content: "最舊內容", value: "desc" },
];

export default function SelectList({ className = "" }) {
  const [selected, setSelected] = useState(options[0]);


  return (
    <div className={`${className} font-notoSans`}>
      <Listbox value={selected} onChange={setSelected} name="assignee">
        <div className="relative">
          <Listbox.Button className="relative w-full cursor-pointer border-2 border-[#000400] bg-white py-2 pl-4 pr-10 text-left ">
            <span className="block truncate">{selected.content}</span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <IconSelector />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute mt-0.5 max-h-60 w-full overflow-auto border-2 border-[#000400] bg-white py-1">
              {options.map((option) => (
                <Listbox.Option
                  key={option.id}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active ? "bg-[#E2EDFA]" : "text-gray-900"
                    }`
                  }
                  value={option}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? "font-bold" : "font-normal"
                        }`}
                      >
                        {option.content}
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                          <IconCheck className="h-5 w-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
}
