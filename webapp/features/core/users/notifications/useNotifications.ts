import { getToken, onMessage } from "firebase/messaging";
import { toast } from "react-toastify";

import { messaging } from "@/features/core/db/firebase";
import { createNotificationToken } from "@/features/core/users/crud/createNotificationToken";

export const useNotifications = () => ({
  initNotifications: async (userId: string) => {
    if (Notification) {
      // Event listener that listens for the push notification event in the background
      if ("serviceWorker" in navigator) {
        navigator.serviceWorker.addEventListener("message", (event) => {
          document.title = "New message!";

          // show toast when user switches to the tab
        });
      }

      const permission = await Notification.requestPermission();
      if (permission === "granted" && messaging) {
        const currentToken = await getToken(messaging, {
          vapidKey:
            "BI7kenVcrGS6ha5LTuWK-l8GdkpP2YTbHuKu5btBSPxgRsPNaABIjhLT_tLf-hNCTUqchemVCR6WyLLiIvQZwcI",
        });
        if (currentToken) {
          createNotificationToken({
            user: userId,
            token: currentToken,
          });
          toast.success("Notifications enabled!");
          onMessage(messaging, (payload) => {
            toast.info(payload.notification?.body);
          });
        }
      }
    } else {
      toast.error("Oops! Notifications are not supported on this browser yet.");
    }
  },
});
