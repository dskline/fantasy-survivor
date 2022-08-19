import React from "react";

import { RadioGroup as HeadlessRadioGroup } from "@headlessui/react";
import { Control, Controller } from "react-hook-form";
import { UseControllerProps } from "react-hook-form/dist/types/controller";
import { FieldValues } from "react-hook-form/dist/types/fields";

import { classnames } from "@/features/utils/formatters/classnames";

type Props<T extends FieldValues> = {
  control: Control<T>;
  label?: string;
  options: Array<{
    value: string;
    title: string;
    subtitle?: string;
    Icon: React.FC<{ className: string }>;
  }>;
} & UseControllerProps<T>;
export const RadioGroup = <T extends FieldValues>(props: Props<T>) => {
  const { control, label, options, ...useControllerProps } = props;
  return (
    <Controller
      control={control}
      {...useControllerProps}
      render={({ field }) => (
        <HeadlessRadioGroup {...field}>
          {label && (
            <HeadlessRadioGroup.Label>{label}</HeadlessRadioGroup.Label>
          )}
          {options.map(({ value, title, subtitle, Icon }) => (
            <HeadlessRadioGroup.Option
              key={value}
              value={value}
              className="group focus:outline-none"
            >
              {({ checked }) => (
                <div
                  tabIndex={-1}
                  className={classnames(
                    "flex items-center gap-8 rounded-lg border-2 border-transparent py-2 px-8 shadow-md",
                    checked
                      ? "border-blue-600 bg-blue-100"
                      : classnames(
                          "cursor-pointer bg-white",
                          "group-hover:border-blue-400 group-hover:bg-gray-50",
                          "group-focus:border-blue-400 group-focus:bg-gray-50"
                        )
                  )}
                >
                  <div>
                    <Icon
                      className={classnames(
                        "h-10 w-10",
                        checked ? "text-blue-600" : "text-gray-400"
                      )}
                    />
                  </div>
                  <div className="py-2 text-left">
                    <div className="mb-2 font-semibold">{title}</div>
                    <div className="text-sm">{subtitle}</div>
                  </div>
                  <div className="self-start py-4">
                    <div
                      className={classnames(
                        "flex h-4 w-4 items-center justify-center rounded-full",
                        checked
                          ? "border-2 border-blue-500 p-[2px]"
                          : "border border-gray-400 p-[3px]"
                      )}
                    >
                      <div
                        className={classnames(
                          "h-full w-full rounded-full",
                          checked ? "bg-blue-500" : ""
                        )}
                      />
                    </div>
                  </div>
                </div>
              )}
            </HeadlessRadioGroup.Option>
          ))}
        </HeadlessRadioGroup>
      )}
    />
  );
};
