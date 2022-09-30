import React, { useEffect, useState } from "react";

import { Popover, Transition } from "@headlessui/react";
import { Placement } from "@popperjs/core";
import { BsQuestionCircleFill } from "react-icons/bs";
import { usePopper } from "react-popper";

type SetRef = React.Dispatch<
  React.SetStateAction<HTMLElement | null | undefined>
>;
type Props = {
  renderButton?: (setRef: SetRef) => React.ReactNode;
  children: React.ReactNode;
  placement?: Placement;
};
export const Tooltip = ({ renderButton, children, placement }: Props) => {
  const [referenceElement, setReferenceElement] =
    useState<HTMLElement | null>();
  const [popperElement, setPopperElement] = useState<HTMLElement | null>();
  const { styles, attributes, update } = usePopper(
    referenceElement,
    popperElement,
    {
      placement,
    }
  );

  useEffect(() => {
    update?.();
  }, [update]);

  return (
    <Popover className="relative z-10 flex items-center">
      {renderButton?.(setReferenceElement) || (
        <Popover.Button ref={setReferenceElement} className="-m-2 p-2">
          <BsQuestionCircleFill className="h-3 w-3 text-slate-500 md:h-4 md:w-4" />
        </Popover.Button>
      )}
      <Transition
        enter="transition duration-200 ease-in-out"
        enterFrom="transform opacity-0"
        enterTo="transform opacity-100"
        leave="transition duration-200 ease-in-out"
        leaveFrom="transform opacity-100"
        leaveTo="transform opacity-0"
      >
        <Popover.Panel
          className="absolute inset-0"
          ref={setPopperElement}
          style={styles.popper}
          {...attributes.popper}
        >
          <div className="rounded bg-slate-800 px-2 py-0.5 text-sm text-slate-50">
            {children}
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
};
