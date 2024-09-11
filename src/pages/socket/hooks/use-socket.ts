import { useEffect, useRef, useState } from 'react';

export const useSocket = () => {
  const [messages, setMessages] = useState<string[]>([]);
  const socketRef = useRef<WebSocket | null>(null);

  useEffect(() => {
    socketRef.current = new WebSocket(import.meta.env.VITE_API_BASE_SOCKET_URL);

    socketRef.current.onopen = () => {
      console.log('Соединение установлено');
    };

    socketRef.current.onmessage = (event) => {
      setMessages((prevMessages) => [...prevMessages, event.data]);
    };

    socketRef.current.onclose = () => {
      console.log('Соединение закрыто');
    };

    return () => {
      socketRef.current?.close();
    };
  }, []);

  return {
    socket: socketRef.current!,
    messages,
  };
};
