import { Fragment, useState } from "react";

import { Dialog, Transition } from "@headlessui/react";
import { useUser } from "@supabase/auth-helpers-react";

import { useNotifications } from "@/features/core/users/notifications/useNotifications";

export const WhatsNewModal = () => {
  const { user } = useUser();
  const { initNotifications } = useNotifications();
  const [isOpen, setIsOpen] = useState(true);

  if (!user) return <></>;

  const handleClose = () => {
    setIsOpen(false);
    initNotifications(user.id);
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={() => handleClose()}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  New Update!
                </Dialog.Title>

                {`The app will now notify you when there's an update to one of your leagues. Now you don't need to check the app every day to see if there's a new update.`}
                {`After closing this modal, the app will ask you for permission. You can turn off these notifications in your user settings.`}

                <button onClick={() => handleClose()}>Close</button>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};
