import PropTypes from "prop-types";
import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import { useSelector } from "react-redux";
import api from '../config/axios';
import { createEcho } from "../utils/echo";
import notify from "../utils/toastr";

const NotificationContext = createContext(null);

export function NotificationProvider({
  children,
  onNewNotification,
  onStockUpdate,
}) {
  const { admin, token } = useSelector((state) => state.auth);

  const adminId = admin?.id;

  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [unreadCount, setUnreadCount] = useState(0);

  const [stockLevels, setStockLevels] = useState({});

  const audioRef = useRef(null);

  useEffect(() => {
    audioRef.current = new Audio("/sounds/notification.mp3");
    audioRef.current.preload = "auto";
    audioRef.current.volume = 1;
  }, []);

  const fetchNotifications = async () => {
    try {
      const res = await api.get("/notifications");
      const data = res.data.data || [];

      setNotifications(data);
      setUnreadCount(data.filter((item) => !item.read_at).length);
    } catch (error) {
      console.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!adminId || !token) return;

    fetchNotifications();

    const echo = createEcho(token);

    const channelName = `App.Models.User.${adminId}`;

    const privateChannel = echo.private(channelName);

    privateChannel.notification((notification) => {
      if (audioRef.current) {
        audioRef.current.currentTime = 0;
        audioRef.current.play().catch((error) => {
          console.log("Audio play blocked:", error);
        });
      }

      const newNotification = {
        id: crypto.randomUUID(),
        data: notification,
        read_at: null,
        created_at: new Date().toISOString(),
      };

      setNotifications((prev) => [newNotification, ...prev]);
      setUnreadCount((prev) => prev + 1);

      notify(notification.message ?? notification.title, "warning");

      onNewNotification?.(notification);
    });

    return () => {
      echo.leave(channelName);
    };
  }, [adminId, token , onNewNotification]);

  useEffect(() => {
    if (!token) return;  

    const echo = createEcho(token);

    const publicChannel = echo.channel("inventory-stock");

    publicChannel.listen(".stock.updated", (event) => {
      setStockLevels((prev) => ({
        ...prev,
        [event.product_id]: event.quantity,
      }));

      onStockUpdate?.(event);
    });

    return () => {
      echo.leaveChannel("inventory-stock");
    };
  }, [token , onStockUpdate]);

  const markAllAsRead = async () => {
    try {
      await api.post("/notifications/read");

      setNotifications((prev) =>
        prev.map((item) => ({
          ...item,
          read_at: true,
        })),
      );

      setUnreadCount(0);
    } catch (error) {
      console.error(error);
    }
  };

  const value = useMemo(() => {
    return {
      notifications,
      loading,
      unreadCount,
      markAllAsRead,
      fetchNotifications,
      stockLevels,
    };
  }, [notifications, loading, unreadCount, stockLevels]);

  return (
    <NotificationContext.Provider value={value}>
      {children}
    </NotificationContext.Provider>
  );
}

export function useNotifications() {
  const context = useContext(NotificationContext);

  if (!context) {
    throw new Error(
      "useNotifications must be used inside NotificationProvider",
    );
  }

  return context;
}

NotificationProvider.propTypes = {
  children: PropTypes.node.isRequired,
  onNewNotification: PropTypes.func,
  onStockUpdate: PropTypes.func,
};
