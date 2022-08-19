import { motion } from "framer-motion";
import { UseFormReturn } from "react-hook-form";

import { Rules } from "@/features/core/db/graphql/schema";
import { CreateLeagueFields } from "@/features/core/leagues/CreateLeaguePage";
import { UpdateRule } from "@/features/core/leagues/CreateLeaguePage/UpdateRule";

type Props = {
  availableRules: Array<Pick<Rules, "id" | "description" | "is_negative">>;
  form: UseFormReturn<CreateLeagueFields>;
};
export const LeagueFormatSettings = ({ availableRules, form }: Props) => {
  const { control, watch, setValue } = form;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col gap-4"
    >
      <h1 className="text-3xl">League Format Settings</h1>
      <h2 className="px-8 pt-4 text-lg font-semibold">Rules</h2>
      {availableRules.map((rule) => (
        <UpdateRule
          key={rule.id}
          control={control}
          name={`ruleset.rules.${rule.id}.points`}
          rule={rule}
          watch={watch}
          rules={{
            onBlur: (e) => {
              const value = Number.parseFloat(e.target.value);
              setValue(
                `ruleset.rules.${rule.id}.points`,
                Number.isFinite(value) ? value : 0
              );
            },
          }}
        />
      ))}
    </motion.div>
  );
};
