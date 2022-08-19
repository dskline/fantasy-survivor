import { useEffect, useState } from "react";

import { useUser } from "@supabase/auth-helpers-react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

import { SubmitButton } from "@/features/components/form/SubmitButton";
import { LoginModal } from "@/features/core/auth/login/LoginModal";
import {
  LeagueFormats,
  RealitySeries,
  RsLeagueFormats,
  Rules,
  Rulesets,
  Seasons,
} from "@/features/core/db/graphql/schema";
import { LeagueFormatPicker } from "@/features/core/leagues/CreateLeaguePage/LeagueFormatPicker";
import { LeagueFormatSettings } from "@/features/core/leagues/CreateLeaguePage/LeagueFormatSettings";
import { LeagueNameSection } from "@/features/core/leagues/CreateLeaguePage/LeagueNameSection";
import { createLeague } from "@/features/core/leagues/crud/createLeague";

export type CreateLeagueFields = {
  title?: string;
  leagueFormat: LeagueFormats["id"];
  ruleset: {
    id?: Rulesets["id"];
    rules: NodeJS.Dict<{ points: number }>;
  };
};
export type CreateLeagueProps = {
  show: Pick<RealitySeries, "title">;
  season: Pick<Seasons, "id" | "order" | "title" | "logo_src">;
  availableRules: Array<Pick<Rules, "id" | "description" | "is_negative">>;
  availableFormats: Array<RsLeagueFormats>;
  initialValues?: Partial<CreateLeagueFields>;
};
export const CreateLeaguePage = ({
  season,
  availableRules,
  availableFormats,
  initialValues,
}: CreateLeagueProps) => {
  const router = useRouter();
  const { user, isLoading } = useUser();
  const [showLoginModal, setShowLoginModal] = useState(false);

  const form = useForm<CreateLeagueFields>({
    defaultValues: initialValues,
  });
  const { handleSubmit, watch, formState } = form;
  const ruleset = watch("ruleset");

  useEffect(() => {
    if (!isLoading && !user) {
      setShowLoginModal(true);
    }
  }, [isLoading, user]);

  const onSubmit = async (data: CreateLeagueFields) => {
    if (!user) {
      setShowLoginModal(true);
      return false;
    }
    const { createdId, error } = await createLeague(
      data,
      availableFormats,
      user.id,
      season.id
    );
    if (error) {
      toast.error(error, { position: "bottom-center" });
      return false;
    }
    await router.push(`/leagues/${createdId}/invite`);
  };

  return (
    <div>
      <form
        className="flex flex-col gap-8 p-8 md:px-24 lg:px-40"
        onSubmit={handleSubmit(onSubmit, (errors) => {
          for (const key of Object.keys(errors)) {
            const message = errors[key as keyof CreateLeagueFields]?.message;
            if (message) {
              toast.error(message, { position: "bottom-center" });
            }
          }
        })}
      >
        <LeagueNameSection form={form} />
        <div className="lg:w-3/4">
          <LeagueFormatPicker availableFormats={availableFormats} form={form} />
        </div>
        {ruleset && (
          <LeagueFormatSettings availableRules={availableRules} form={form} />
        )}
        <div className="ml-auto">
          <SubmitButton
            title="Invite Players"
            subtitle="Next"
            isSubmitting={formState.isSubmitting}
          />
        </div>
      </form>
      <LoginModal
        isOpen={showLoginModal}
        onClose={() => setShowLoginModal(false)}
      />
    </div>
  );
};
