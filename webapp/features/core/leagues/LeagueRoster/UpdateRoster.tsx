import React from "react";

import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

import { useUpdateRoster } from "@/features/core/leagues/crud/updateRoster";
import {
  Contestant,
  LeagueUser,
  Roster,
} from "@/features/core/leagues/LeaguePage/types";
import { EditableRosterCard } from "@/features/core/leagues/LeagueRoster/RosterCard/EditableRosterCard";
import { RosterHeader } from "@/features/core/leagues/LeagueRoster/RosterHeader";

type UpdateRosterFields = {
  roster: Roster;
};
type Props = {
  user: LeagueUser;
  selectedContestant: Contestant;
  setSelectedContestant: (contestant: Contestant) => void;
};
export const UpdateRoster = ({
  user,
  selectedContestant,
  setSelectedContestant,
}: Props) => {
  const updateRoster = useUpdateRoster();

  const form = useForm<UpdateRosterFields>({
    defaultValues: {
      roster: user.userRoster?.roster || [],
    },
  });
  const { handleSubmit, reset, getValues, watch, setValue, formState } = form;
  const { isDirty, isSubmitSuccessful } = formState;
  const roster = watch("roster");

  async function onSubmit(data: UpdateRosterFields) {
    if (user.participantId) {
      const { error } = await updateRoster(user.participantId, data.roster);
      if (error) {
        toast.error(error.message, { type: "error" });
        return false;
      }
      reset(data);
    }
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-5">
        <RosterHeader
          isRosterComplete={
            Object.keys(isDirty ? user.userRoster || {} : roster).length === 9
          }
        />
        <EditableRosterCard
          roster={getValues("roster")}
          rosterSize={9}
          onRosterChange={(roster) => {
            setValue("roster", roster, { shouldDirty: true });
          }}
          selectedContestant={selectedContestant}
          setSelectedContestant={setSelectedContestant}
          renderActionBar={() => (
            <>
              {isDirty && (
                <span className="italic text-gray-500">
                  You have unsaved changes
                  <button
                    type="submit"
                    className="ml-2 rounded bg-blue-600 px-2 py-1 text-white"
                  >
                    Save
                  </button>
                </span>
              )}
              {!isDirty && isSubmitSuccessful && (
                <span className="italic text-green-600">Saved!</span>
              )}
            </>
          )}
        />
      </div>
    </form>
  );
};
