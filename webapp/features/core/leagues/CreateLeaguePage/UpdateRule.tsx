import React, { useRef } from "react";

import classnames from "classnames";
import { Control, Controller, UseFormWatch } from "react-hook-form";
import { UseControllerProps } from "react-hook-form/dist/types/controller";
import { MdEdit } from "react-icons/md";

import { Rules } from "@/features/core/db/graphql/schema";
import { CreateLeagueFields } from "@/features/core/leagues/CreateLeaguePage";

type Props<T> = {
  control: Control<T>;
  watch: UseFormWatch<T>;
  rule: Pick<Rules, "id" | "description" | "is_negative">;
} & UseControllerProps<T>;

export const UpdateRule = ({
  control,
  rule,
  watch,
  ...useControllerProps
}: Props<CreateLeagueFields>) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const points = watch(`ruleset.rules.${rule.id}.points`);

  return (
    <Controller
      control={control}
      {...useControllerProps}
      render={({ field }) => (
        <div
          className={classnames(
            "flex items-center gap-6 transition-colors focus-within:bg-blue-100",
            "rounded-lg shadow-md",
            points === 0 ? "bg-gray-300 text-gray-600 opacity-50" : "bg-gray-50"
          )}
        >
          <div className="flex-1 py-4 pl-8">{rule.description}</div>
          <button
            type="button"
            className="flex cursor-pointer items-center gap-4 pr-8"
            onClick={() => inputRef.current?.focus()}
            tabIndex={-1}
          >
            <div>
              <input
                autoComplete="off"
                onFocus={() => inputRef.current?.select()}
                className="mr-1 w-16 cursor-pointer bg-inherit text-right outline-0"
                {...field}
                ref={(e) => {
                  field.ref?.(e);
                  inputRef.current = e;
                }}
              />
              points
            </div>
            <MdEdit className="h-4 w-4" />
          </button>
        </div>
      )}
    ></Controller>
  );
};
