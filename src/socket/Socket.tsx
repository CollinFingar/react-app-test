import React, { useState, useCallback, useEffect } from "react";
import useWebSocket, { ReadyState } from "react-use-websocket";

import { SOCKET_URL } from "../constants";

export const Socket = () => {
  const [messageHistory, setMessageHistory] = useState<MessageEvent<any>[]>([]);

  const { sendMessage, lastMessage, readyState } = useWebSocket(SOCKET_URL);

  // Appends the last message to the message history each time it is updated
  useEffect(() => {
    if (lastMessage !== null) {
      console.log("socket: last:", lastMessage);
      setMessageHistory((prev) => prev.concat(lastMessage));
    }
  }, [lastMessage]);

  // Callback hook for the send message button click
  const handleClickSendMessage = useCallback(
    () => sendMessage(`${new Date().getTime()}`),
    []
  );

  const connectionStatus = {
    [ReadyState.CONNECTING]: "connecting",
    [ReadyState.OPEN]: "open",
    [ReadyState.CLOSING]: "closing",
    [ReadyState.CLOSED]: "closed",
    [ReadyState.UNINSTANTIATED]: "uninstantiated",
  }[readyState];

  return (
    <div>
      <button
        onClick={handleClickSendMessage}
        disabled={readyState !== ReadyState.OPEN}
      >
        SEND ECHO MESSAGE
      </button>

      <div>
        WS is <b>{connectionStatus}</b>
      </div>

      {lastMessage ? <div>Last message: {lastMessage.data}</div> : null}

      <ul>
        {messageHistory.map((message, idx) => (
          <li key={idx}>{message ? message.data : null}</li>
        ))}
      </ul>
    </div>
  );
};

export default Socket;
