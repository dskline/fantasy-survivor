import React from "react";

import { UseFormReturn } from "react-hook-form";
import { BsTrophy } from "react-icons/bs";

import { RadioGroup } from "@/features/components/form/RadioGroup";
import { RsLeagueFormats } from "@/features/core/db/graphql/schema";
import { CreateLeagueFields } from "@/features/core/leagues/CreateLeaguePage";

type Props = {
  availableFormats: Array<RsLeagueFormats>;
  form: UseFormReturn<CreateLeagueFields>;
};
export const LeagueFormatPicker = ({ availableFormats, form }: Props) => {
  const { control, setValue } = form;

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const ruleset = availableFormats.find(
      (format) => format.league_formats?.id === e.target.value
    )?.rulesets;

    if (ruleset?.id) {
      setValue("ruleset", {
        id: ruleset.id,
        rules: JSON.parse(ruleset.data).rules,
      });
    }
  }

  return (
    <div>
      <h1 className="mb-6 text-3xl">Pick a Format</h1>
      <RadioGroup
        name="leagueFormat"
        rules={{
          required: "League format must be selected",
          onChange: handleChange,
        }}
        control={control}
        options={[
          {
            title: "Rank Format",
            subtitle:
              "Each participant privately chooses their favorite contestants in a ranked order. Contestants are then awarded higher points in proportion to how highly the contestants are ranked in each participant's pool.",
            value: "RANK",
            Icon: BsTrophy,
          },
        ]}
      />
      <div className="p-8 text-sm italic">More formats coming soon...</div>
    </div>
  );
};
