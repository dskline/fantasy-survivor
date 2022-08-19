import { UseFormReturn } from "react-hook-form";

import { CreateLeagueFields } from "@/features/core/leagues/CreateLeaguePage/index";

type Props = {
  form: UseFormReturn<CreateLeagueFields>;
};
export const LeagueNameSection = ({ form }: Props) => (
  <div>
    <div className="flex items-baseline justify-between">
      <h1 className="mb-4 text-3xl">Name Your League</h1>
      <span className="italic text-blue-800">* optional</span>
    </div>
    <input
      className="w-full rounded-lg border border-gray-300 p-2 placeholder:text-sm"
      {...form.register("title")}
      placeholder="Leaguey McLeagueface"
    />
  </div>
);
